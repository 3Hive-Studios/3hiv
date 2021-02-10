import { Component, OnInit } from '@angular/core';
import { WalletService } from '../wallet.service';
import { ContractService } from '../contract.service';
import { ConstantsService } from '../constants.service';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  constructor(public wallet: WalletService, public contract: ContractService, public constants: ConstantsService, public utils: UtilsService) { 
    this.resetData();
  }

  monList: any;
  loading: boolean;

  ngOnInit(): void {
    if (this.wallet.connected) {
      this.loadData();
    }
    this.wallet.connectedEvent.subscribe(() => {
      this.loadData();
    });
    this.wallet.errorEvent.subscribe(() => {
      this.resetData();
    });
  }

  resetData() {
    this.monList = [];
    this.loading = true;
  }

  async loadData() {
    
    if (window["monList"] != undefined) {
      this.monList = window["monList"];
      this.loading = false;
    }
    else {
      let multicallFns = {
        "monURIs": {
          target: this.constants.NFT_AGGREGATOR_ADDRESS,
          callData: this.contract.NFT_AGG.methods.getURIs(this.constants.MON_MINTER_ADDRESS, this.wallet.userAddress).encodeABI()
        },
        "monIds": {
          target: this.constants.NFT_AGGREGATOR_ADDRESS,
          callData: this.contract.NFT_AGG.methods.getIds(this.constants.MON_MINTER_ADDRESS, this.wallet.userAddress).encodeABI() 
        }
      };

      let results = await this.utils.makeMulticall(multicallFns);
      let uriList = await this.utils.decode("string[]", results["monURIs"]);
      let monIdList = await this.utils.decode("uint256[]", results["monIds"]);

      for (let i = 0; i < uriList.length; i++) {
        const response = await fetch(uriList[i]);
        const responseObj = await response.json();
        let obj = {};
        let id = monIdList[i];
        obj["id"] = id;
        obj["name"] = responseObj["name"];
        obj["img"] =  responseObj["image"];
        this.monList.push(obj);
      }

      // cache locally
      window["monList"] = this.monList;

      this.loading = false;
    }
  }
}
