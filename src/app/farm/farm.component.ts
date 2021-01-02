import { Component, OnInit } from '@angular/core';
import BigNumber from 'bignumber.js';
import { ConstantsService } from '../constants.service';
import { ContractService } from '../contract.service';
import { UtilsService } from '../utils.service';
import { WalletService } from '../wallet.service';

@Component({
  selector: 'app-farm',
  templateUrl: './farm.component.html',
  styleUrls: ['./farm.component.css']
})
export class FarmComponent implements OnInit {

  stakeAmount: string;
  lpBalance: BigNumber;
  stakedBalance: BigNumber;
  farmedXMON: BigNumber;

  constructor(public wallet: WalletService, public contract: ContractService, public constants: ConstantsService, public utils: UtilsService) { 
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

  resetData() {
    this.lpBalance = new BigNumber(0);
    this.stakedBalance = new BigNumber(0);
    this.farmedXMON = new BigNumber(0);
  }

  async loadData() {

    let multicallFns = {
      "lpBalance": {
        target: this.constants.XMON_ETH_LP_TOKEN_ADDRESS,
        callData: this.contract.XMON_ETH_LP.methods.balanceOf(this.wallet.userAddress).encodeABI()
      },
      "stakedBalance": {
        target: this.constants.LP_POOL_REWARDS_ADDRESS,
        callData: this.contract.LP_POOL_REWARDS.methods.balanceOf(this.wallet.userAddress).encodeABI()
      },
      "farmedXMON": {
        target: this.constants.LP_POOL_REWARDS_ADDRESS,
        callData: this.contract.LP_POOL_REWARDS.methods.earned(this.wallet.userAddress).encodeABI()
      }
    };

    let results = await this.utils.makeMulticall(multicallFns);
    this.lpBalance = new BigNumber(this.utils.decode("uint256", results["lpBalance"])).div(this.constants.PRECISION);
    this.stakedBalance = new BigNumber(this.utils.decode("uint256", results["stakedBalance"])).div(this.constants.PRECISION);
    this.farmedXMON = new BigNumber(this.utils.decode("uint256", results["farmedXMON"])).div(this.constants.PRECISION);
  }

  stake() {
    if (!this.stakeAmount) {
      this.stakeAmount = '0';
    }
    if (this.stakeAmount === '0') {
      alert("Must have stake greater than 0!");
      return;
    }
    const formattedStakeAmount = new BigNumber(this.stakeAmount).times(this.constants.PRECISION).integerValue().toFixed();
    const func = this.contract.LP_POOL_REWARDS.methods.stake(formattedStakeAmount);
    this.wallet.sendTxWithToken(func, this.contract.XMON_ETH_LP, this.constants.LP_POOL_REWARDS_ADDRESS, formattedStakeAmount,
      200000, () => {
      }, () => {
        this.loadData();
      }, () => { });
  }

  exit() {
    const func = this.contract.LP_POOL_REWARDS.methods.exit();
    this.wallet.sendTx(func, ()=>{}, ()=>{
      this.loadData();
    }, ()=>{});
  }

  claimRewards() {
    const func = this.contract.LP_POOL_REWARDS.methods.getReward();
    this.wallet.sendTx(func, ()=>{}, ()=>{
      this.loadData();
    }, ()=>{});
  }

  fillForm(value) {
    this.stakeAmount = value.toString();
  }

}
