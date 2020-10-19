import { Component, OnInit } from '@angular/core';
import { WalletService } from '../wallet.service';
import { ContractService } from '../contract.service';
import { ConstantsService } from '../constants.service';
import BigNumber from 'bignumber.js';

@Component({
  selector: 'app-mon-store',
  templateUrl: './mon-store.component.html',
  styleUrls: ['./mon-store.component.css']
})
export class MonStoreComponent implements OnInit {

  gemsList: Array<Object>;
  yfbBalance: BigNumber;
  price: BigNumber;
  buyAmt: string;

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
    this.yfbBalance = new BigNumber(await this.contract.YFB.methods.balanceOf(this.wallet.userAddress).call()).div(this.constants.PRECISION);
    this.price = new BigNumber(await this.contract.MONS.methods.tokenPrice.call().call()).div(this.constants.PRECISION);

    let numGems = await this.contract.STAKER.methods.balanceOf(this.wallet.userAddress).call();
    const minStake = await this.contract.MONS.methods.minStakeTime.call().call();
    const currBlock = new BigNumber(await this.wallet.web3.eth.getBlockNumber());
    for (let i = 0; i < numGems; i++) {
      let gemId = await this.contract.STAKER.methods.tokenOfOwnerByIndex(this.wallet.userAddress, i).call();
      let gemData = await this.contract.STAKER.methods.rewardRecords(gemId).call();
      gemData["id"] = gemId;
      gemData["amount"] = new BigNumber(gemData["amount"]).div(this.constants.PRECISION);
      const startBlock = new BigNumber(gemData["startBlock"]);
      let endBlock = new BigNumber(gemData["endBlock"]);
      if (endBlock.isLessThan(startBlock)) {
        endBlock = currBlock;
      }
      gemData["duration"] = endBlock.minus(startBlock);

      // disable button if it's not burnable
      if (endBlock.minus(startBlock).isGreaterThanOrEqualTo(new BigNumber(minStake))) {
        gemData["isBurnable"] = true;
      }
      else {
        gemData["isBurnable"] = false;
      }

      this.gemsList.push(gemData);
    }
  }

  resetData() {
    this.gemsList = [];
    this.yfbBalance = new BigNumber(0);
  }

  burnGem(id, isBurnable) {
    if (isBurnable) {
      const func = this.contract.MONS.methods.mineMonster(id);
      this.getMon(func);
    }
  }

  buyMon() {
    const func = this.contract.MONS.methods.buyMonster();
    this.getMon(func);
  }

  getMon(f) {
    this.wallet.sendTxWithNFT(f, this.contract.STAKER, this.constants.MON_ADDRESS, 400000, ()=>{}, ()=>{
      this.contract.MONS.methods.numMonsCreated.call().call().then(function(num) {
        this.showMon(num+1);
      });
    }, ()=> {});
  }

  showMon(id) {
    fetch("./assets/mons-database.json").then(resp => resp.json()).then(function(j) {
      alert("You just unlocked: " + j[id]["name"] + ". Head to the Bestiary to view.");
    });
  }
}
