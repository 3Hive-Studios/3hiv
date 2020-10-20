import { Component, OnInit } from '@angular/core';
import { WalletService } from '../wallet.service';
import { ContractService } from '../contract.service';
import { ConstantsService } from '../constants.service';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.css']
})
export class MergeComponent implements OnInit {

  canMerge: boolean;
  namesList: Array<Object>;
  imgMap: any;
  monLeft: any;
  monRight: any;

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
    this.canMerge = await this.contract.MONS.methods.canMerge.call().call();
    const response = await fetch("./assets/mons-database.json");
    const monData = await response.json();
    let numMons = await this.contract.MONS.methods.balanceOf(this.wallet.userAddress).call();
    for (let i = 0; i < numMons; i++) {
      let monId = await this.contract.MONS.methods.tokenOfOwnerByIndex(this.wallet.userAddress, i).call();
      let d = monData[monId];
      this.namesList.push(d["name"]);
      this.imgMap[d["name"]] = this.constants.S3_URL + d["img"];
    }
  }

  resetData() {
    this.canMerge = false;
    this.namesList = [];
    this.monLeft = '';
    this.monRight = this.monLeft;
    this.imgMap = {};
  }
}
