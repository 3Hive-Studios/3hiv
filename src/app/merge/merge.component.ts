import { Component, OnInit } from '@angular/core';
import { WalletService } from '../wallet.service';
import { ContractService } from '../contract.service';
import { ConstantsService } from '../constants.service';
import BigNumber from 'bignumber.js';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.css']
})
export class MergeComponent implements OnInit {

  canMerge: boolean;
  namesList: Array<Object>;
  tokenSymbol: string;
  idMap: any;
  imgMap: any;
  monLeft: any;
  monRight: any;
  token: any;
  tokenBalance: BigNumber;
  mergePrice: BigNumber;
  monsRemaining: BigNumber;

  constructor(public wallet: WalletService, public contract: ContractService, public constants: ConstantsService) { 
    this.resetData();
  }

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

  async loadData() {
    // token info
    const tokenAddress = await this.contract.MONS.methods.token.call().call();
    this.token = this.contract.ERC20(tokenAddress);
    this.tokenBalance = new BigNumber(await this.token.methods.balanceOf(this.wallet.userAddress).call()).div(this.constants.PRECISION);
    this.tokenSymbol = await this.token.methods.symbol.call().call();
    this.mergePrice = new BigNumber(await this.contract.MONS.methods.mergePrice.call().call()).div(this.constants.PRECISION);

    // total mons info
    const totalMons = new BigNumber(await this.contract.MONS.methods.maxMons.call().call());
    const monsMade = await this.contract.MONS.methods.getTotalMons().call();
    this.monsRemaining = totalMons.minus(monsMade);

    // each mon's info
    this.canMerge = await this.contract.MONS.methods.canMerge.call().call();
    const response = await fetch("./assets/mons_database.json");
    const monData = await response.json();
    let numMons = await this.contract.MONS.methods.balanceOf(this.wallet.userAddress).call();
    for (let i = 0; i < numMons; i++) {
      let monId = await this.contract.MONS.methods.tokenOfOwnerByIndex(this.wallet.userAddress, i).call();
      let d = monData[monId];
      this.namesList.push(d["name"]);
      this.imgMap[d["name"]] = this.constants.S3_URL + d["img"];
      this.idMap[d["name"]] = monId;
    }
  }

  mergeMons(id1, id2) {
    const func = this.contract.MONS.methods.mergeMonsters(this.idMap[id1], this.idMap[id2]);
    this.wallet.sendTxWithToken(func, this.token, this.constants.MON_ADDRESS, this.mergePrice, 400000, ()=>{}, ()=>{}, ()=>{});
  }

  resetData() {
    this.canMerge = false;
    this.namesList = [];
    this.monLeft = '';
    this.monRight = this.monLeft;
    this.imgMap = {
      '': './assets/placeholder.png'
    };
    this.idMap = {};
    this.tokenBalance = new BigNumber(0);
    this.mergePrice = new BigNumber(0);
    this.monsRemaining = new BigNumber(0);
    this.tokenSymbol = '';
  }
}
