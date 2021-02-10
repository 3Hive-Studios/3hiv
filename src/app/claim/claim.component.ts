import { Component, OnInit } from '@angular/core';
import { WalletService } from '../wallet.service';
import { ContractService } from '../contract.service';
import BigNumber from 'bignumber.js';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})
export class ClaimComponent implements OnInit {

  hasMon: boolean;

  constructor(public wallet: WalletService, public contract: ContractService) { }

  ngOnInit(): void {
    if (this.wallet.connected) {
      this.loadData();
    }
    this.wallet.connectedEvent.subscribe(() => {
      this.loadData();
    });
    this.wallet.errorEvent.subscribe(() => {
      this.hasMon = false;
    });
    this.hasMon = false;
  }

  async loadData() {
    let numMons = new BigNumber(await this.contract.OLD_0XMONS.methods.balanceOf(this.wallet.userAddress).call());
    this.hasMon = numMons.isGreaterThan(new BigNumber(0));
  }



  claim() {
    const func = this.contract.ClAIMER.methods.claim();
    this.wallet.sendTx(func, ()=>{}, ()=>{}, ()=>{});
  }

}
