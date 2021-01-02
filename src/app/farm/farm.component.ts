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
  days: any;
  hours: any;
  minutes: any;
  seconds: any;

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

    this.countDown();
    setInterval(() => {
      this.countDown();
    }, 1000);
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

  countDown() {
    let countDownDate = new Date(1609869600*1000).getTime();

    // Get today's date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = countDownDate - now;

    if (distance >= 0) {
      // Time calculations for days, hours, minutes and seconds
      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
    }
  }

}
