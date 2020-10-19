import { Component, OnInit } from '@angular/core';
import { WalletService } from '../wallet.service';
import { ContractService } from '../contract.service';
import { ConstantsService } from '../constants.service';
import { BigNumber } from 'bignumber.js';

@Component({
  selector: 'app-mons',
  templateUrl: './mons.component.html',
  styleUrls: ['./mons.component.css']
})
export class MonsComponent implements OnInit {

  monsList: Array<Object>;

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

  dec2hex(str){ // .toString(16) only works up to 2^53
    var dec = str.toString().split(''), sum = [], hex = [], i, s
    while(dec.length){
        s = 1 * dec.shift()
        for(i = 0; s || i < sum.length; i++){
            s += (sum[i] || 0) * 10
            sum[i] = s % 16
            s = (s - sum[i]) / 16
        }
    }
    while(sum.length){
        hex.push(sum.pop().toString(16))
    }
    return hex.join('')
  }

  async loadData() {
    const response = await fetch("./assets/mons-database.json");
    const monData = await response.json();
    let numMons = await this.contract.MONS.methods.balanceOf(this.wallet.userAddress).call();
    for (let i = 0; i < numMons; i++) {
      let monId = await this.contract.MONS.methods.tokenOfOwnerByIndex(this.wallet.userAddress, i).call();
      let d = monData[monId];
      d["id"] = monId;
      d["img"] = this.constants.S3_URL + d["img"];
      d["powerBits"] = d["powerBits"].toString(16);
      this.monsList.push(d);
    }
  }

  resetData() {
    this.monsList = [];
  }
}
