import { Component, OnInit } from '@angular/core';
import BigNumber from 'bignumber.js';
import { ConstantsService } from '../constants.service';
import { ContractService } from '../contract.service';
import { UtilsService } from '../utils.service';
import { WalletService } from '../wallet.service';

@Component({
  selector: 'app-xxmon',
  templateUrl: './xxmon.component.html',
  styleUrls: ['./xxmon.component.css']
})
export class XxmonComponent implements OnInit {

  xmonBalance: BigNumber;
  stakeAmount: string;
  stakedXmon: BigNumber;
  exchangeRate: BigNumber;
  totalStaked: BigNumber;

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
    this.xmonBalance = new BigNumber(0);
    this.stakeAmount = "";
    this.stakedXmon = new BigNumber(0);
    this.exchangeRate = new BigNumber(0);
    this.totalStaked = new BigNumber(0);
  }

  async loadData() {
    const multicallFns = {
      "xmonBalance": {
        target: this.constants.XMON_ADDRESS,
        callData: this.contract.XMON.methods.balanceOf(this.wallet.userAddress).encodeABI()
      },
      "stakedXmon": {
        target: this.constants.XXMON_ADDRESS,
        callData: this.contract.XXMON.methods.balanceOf(this.wallet.userAddress).encodeABI()
      },
      "totalStaked": {
        target: this.constants.XXMON_ADDRESS,
        callData: this.contract.XXMON.methods.totalSupply().encodeABI()
      }
    }
    let results = await this.utils.makeMulticall(multicallFns);
    this.xmonBalance = new BigNumber(await this.utils.decode("uint256", results["xmonBalance"])).div(this.constants.PRECISION);
    this.stakedXmon = new BigNumber(await this.utils.decode("uint256", results["stakedXmon"])).div(this.constants.PRECISION);
    let exchangeRateMultiplier = new BigNumber(await this.contract.XXMON.methods.exchangeRate(this.constants.PRECISION.toString()).call()).div(this.constants.PRECISION);
    this.exchangeRate = exchangeRateMultiplier.multipliedBy(this.stakedXmon);
    this.totalStaked = new BigNumber(await this.utils.decode("uint256", results["totalStaked"])).div(this.constants.PRECISION);
  }

  async enter() {
    if (this.stakeAmount === '0') {
      alert("Must have stake greater than 0!");
      return;
    }
    const formattedStakeAmount = new BigNumber(this.stakeAmount).times(this.constants.PRECISION).integerValue().toFixed();
    const func = this.contract.XXMON.methods.enter(formattedStakeAmount);
    await this.wallet.sendTxWithToken(func, this.contract.XMON, this.constants.XXMON_ADDRESS, formattedStakeAmount, 200000, ()=>{}, ()=>{}, (e)=>{alert(e)});
  }

  async leave() {
    if (this.stakeAmount === '0') {
      alert("Must remove stake greater than 0!");
      return;
    }
    const formattedStakeAmount = new BigNumber(this.stakeAmount).times(this.constants.PRECISION).integerValue().toFixed();
    const func = this.contract.XXMON.methods.leave(formattedStakeAmount);
    await this.wallet.sendTxWithToken(func, this.contract.XMON, this.constants.XXMON_ADDRESS, formattedStakeAmount, 200000, ()=>{}, ()=>{}, (e)=>{alert(e)});
  }

  fillForm(value) {
    this.stakeAmount = value.toString();
  }
}
