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
  rewardsLPBalance: BigNumber;
  endTime: any;

  // APY stats
  poolProportion: any;
  dailyXMONYield: BigNumber;
  dailyXMONYieldDAI: BigNumber;
  stakedBalanceDAI: BigNumber;
  floatingYield: any;
  notStaking: boolean;
  ethInXMONLp: BigNumber;
  xmonInXMONLp: BigNumber;

  constructor(public wallet: WalletService, public contract: ContractService, public constants: ConstantsService, public utils: UtilsService) { 
    this.resetData();
  }

  ngOnInit(): void {
    if (this.wallet.connected) {
      this.loadData();
      setInterval(() => {
        this.loadData();
      }, 60000);
    }
    this.wallet.connectedEvent.subscribe(() => {
      this.loadData();
      setInterval(() => {
        this.loadData();
      }, 60000);
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
    this.rewardsLPBalance = new BigNumber(0);
    this.endTime = 1611079200;

    this.poolProportion = new BigNumber(0);
    this.dailyXMONYield = new BigNumber(0);
    this.dailyXMONYieldDAI = new BigNumber(0);
    this.stakedBalanceDAI = new BigNumber(0);
    this.floatingYield = new BigNumber(0);
    this.notStaking = false;

    this.ethInXMONLp = new BigNumber(0);
    this.xmonInXMONLp = new BigNumber(0);
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
      },
      "rewardsLPBalance": {
        target: this.constants.XMON_ETH_LP_TOKEN_ADDRESS,
        callData: this.contract.XMON_ETH_LP.methods.balanceOf(this.constants.LP_POOL_REWARDS_ADDRESS).encodeABI()
      },
      "endTime": {
        target: this.constants.LP_POOL_REWARDS_ADDRESS,
        callData: this.contract.LP_POOL_REWARDS.methods.periodFinish().encodeABI()
      },
      "ethInXMONLP": {
        target: this.constants.WETH_ADDRESS,
        callData: this.contract.WETH.methods.balanceOf(this.constants.XMON_ETH_LP_TOKEN_ADDRESS).encodeABI()
      },
      "XMONInXMONLP": {
        target: this.constants.XMON_ADDRESS,
        callData: this.contract.XMON.methods.balanceOf(this.constants.XMON_ETH_LP_TOKEN_ADDRESS).encodeABI()
      },
      "ethInETHDAILP": {
        target: this.constants.WETH_ADDRESS,
        callData: this.contract.WETH.methods.balanceOf(this.constants.WETH_DAI_LP_ADDRESS).encodeABI()
      },
      "daiInETHDAILP": {
        target: this.constants.DAI_ADDRESS,
        callData: this.contract.DAI.methods.balanceOf(this.constants.WETH_DAI_LP_ADDRESS).encodeABI()
      },
      "totalXMONLPBalance": {
        target: this.constants.XMON_ETH_LP_TOKEN_ADDRESS,
        callData: this.contract.XMON_ETH_LP.methods.totalSupply().encodeABI()
      }
    };

    let results = await this.utils.makeMulticall(multicallFns);
    this.lpBalance = new BigNumber(this.utils.decode("uint256", results["lpBalance"])).div(this.constants.PRECISION);
    this.stakedBalance = new BigNumber(this.utils.decode("uint256", results["stakedBalance"])).div(this.constants.PRECISION);

    if (this.stakedBalance.eq(new BigNumber(0))) {
      this.notStaking = true;
      this.stakedBalance = new BigNumber(1);
    }

    this.farmedXMON = new BigNumber(this.utils.decode("uint256", results["farmedXMON"])).div(this.constants.PRECISION);
    this.rewardsLPBalance = new BigNumber(this.utils.decode("uint256", results["rewardsLPBalance"])).div(this.constants.PRECISION);
    this.endTime = this.utils.decode("uint256", results["endTime"]);

    // APY calculations
    let ethInXMONLP = new BigNumber(this.utils.decode("uint256", results["ethInXMONLP"]));
    let xmonPriceInEth = ethInXMONLP.div(
      new BigNumber(this.utils.decode("uint256", results["XMONInXMONLP"]))
    );
    let ethPriceDAI = new BigNumber(this.utils.decode("uint256", results["daiInETHDAILP"])).div(
      new BigNumber(this.utils.decode("uint256", results["ethInETHDAILP"]))
    );
    let xmonPriceDAI = xmonPriceInEth.times(ethPriceDAI);
    let totalLPBalance =  new BigNumber(this.utils.decode("uint256", results["totalXMONLPBalance"]));
    let lpTokenPrice = ethInXMONLP.div(totalLPBalance).times(ethPriceDAI).times(new BigNumber(2));

    this.poolProportion = this.stakedBalance.div(this.rewardsLPBalance);
    this.dailyXMONYield = this.poolProportion.times(this.constants.XMON_PER_DAY);
    this.dailyXMONYieldDAI = this.dailyXMONYield.times(xmonPriceDAI);
    this.stakedBalanceDAI = lpTokenPrice.times(this.stakedBalance);

    let floatingYield = this.dailyXMONYieldDAI.div(this.stakedBalanceDAI).times(new BigNumber(100));
    this.floatingYield = floatingYield;

    // Hypothetical amounts
    this.ethInXMONLp = ethInXMONLP.div(this.constants.PRECISION).times(this.poolProportion);
    this.xmonInXMONLp = (new BigNumber(this.utils.decode("uint256", results["XMONInXMONLP"])).div(this.constants.PRECISION)).times(this.poolProportion);

    if (this.notStaking) {
      this.stakedBalance = new BigNumber(0);
    }
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
    let countDownDate = new Date(this.endTime*1000).getTime();

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
