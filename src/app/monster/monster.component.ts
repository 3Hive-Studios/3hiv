import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConstantsService } from '../constants.service';
import { ContractService } from '../contract.service';
import { UtilsService } from '../utils.service';
import { WalletService } from '../wallet.service';

@Component({
  selector: 'app-monster',
  templateUrl: './monster.component.html',
  styleUrls: ['./monster.component.css']
})
export class MonsterComponent implements OnInit {

  constructor(public wallet: WalletService, public contract: ContractService, public constants: ConstantsService, private utils: UtilsService, private activatedRoute: ActivatedRoute) {
    this.resetData();
  }

  monId: string;
  monData: any;

  resetData() {
    this.monData = {};
  }

  ngOnInit(): void {
    this.monId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.wallet.connected) {
      this.loadData();
    }
    this.wallet.connectedEvent.subscribe(() => {
      this.loadData();
    });
    this.wallet.errorEvent.subscribe(() => {
      this.resetData();
    });

    this.activatedRoute.params.subscribe(routeParams => {
      this.monId = routeParams.id;
      if (this.wallet.connected) {
        this.loadData();
      }
    });
  }

  async loadData() {
    // Check if already stored
    if (window["mon" + this.monId] !== undefined) {
      let cachedResponse = window["mon" + this.monId];
      this.monData = cachedResponse;
    }
    // Otherwise make the web3 request and server request
    else {
      let multicallFns = {
        "monData": {
          target: this.constants.MON_MINTER_ADDRESS,
          callData: this.contract.MON_MINTER.methods.monRecords(this.monId).encodeABI()
        },
        "tokenURI": {
          target: this.constants.MON_MINTER_ADDRESS,
          callData: this.contract.MON_MINTER.methods.tokenURI(this.monId).encodeABI()
        },
        "numMons": {
          target: this.constants.MON_MINTER_ADDRESS,
          callData: this.contract.MON_MINTER.methods.totalSupply().encodeABI()
        }
      }
      let result = await this.utils.makeMulticall(multicallFns);
      let monStruct = this.utils.decode({
        "parentStruct": {
          "summoner": "address",
          "parent1Id": "uint256",
          "parent2Id": "uint256",
          "minterContract": "address",
          "contractOrder": "uint256",
          "gen": "uint256",
          "bits": "uint256",
          "exp": "uint256",
          "rarity": "uint256"
        }
      }, result["monData"]);
      let numMons = await this.utils.decode("uint256", result["numMons"]);
      let tokenURI;
      if (parseInt(this.monId) <= numMons) {
        tokenURI = this.utils.decode("string", result["tokenURI"]);
      }
      else {
        tokenURI = "./assets/monData.json";
      }
      const response = await fetch(tokenURI);
      const responseObj = await response.json();
      this.monData["name"] = responseObj["name"];
      this.monData["img"] = responseObj["image"];
      this.monData["epithets"] = responseObj["epithets"];
      this.monData["lore"] = responseObj["description"];
      this.monData["parent1Id"] = monStruct["parent1Id"];
      this.monData["parent2Id"] = monStruct["parent2Id"];
      this.monData["gen"] = monStruct["gen"];

      // cache locally
      window["mon" + this.monId] = this.monData;
    }
  }
}
