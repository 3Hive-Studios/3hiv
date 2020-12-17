import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import BigNumber from 'bignumber.js';
import { ConstantsService } from '../constants.service';
import { ContractService } from '../contract.service';
import { WalletService } from '../wallet.service';

@Component({
  selector: 'app-summon',
  templateUrl: './summon.component.html',
  styleUrls: ['./summon.component.css']
})
export class SummonComponent implements OnInit {

  constructor(public wallet: WalletService, public contract: ContractService, public constants: ConstantsService) { 
    this.resetData();
  }

  stakeAmount: string;
  stakedXmon: BigNumber;
  maxStakeAmount: BigNumber;
  xmonBalance: BigNumber;
  doomBalance: BigNumber;
  pendingDoomBalance: BigNumber;
  doomFee: BigNumber;
  blockNumber: any;
  unlockBlock: BigNumber;
  baseDelay: BigNumber;
  currentDelay: BigNumber;
  resetFee: BigNumber;

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
    this.stakedXmon = new BigNumber(0);
    this.maxStakeAmount = new BigNumber(0);
    this.xmonBalance = new BigNumber(0);
    this.doomBalance = new BigNumber(0);
    this.pendingDoomBalance = new BigNumber(0);
    this.doomFee = new BigNumber(0);
    this.unlockBlock = new BigNumber(0);
    this.baseDelay = new BigNumber(0);
    this.currentDelay = new BigNumber(0);
    this.resetFee = new BigNumber(0);
  }

  async loadData() {
    // this.xmonBalance = new BigNumber(await this.contract.XMON.methods.balanceOf(this.wallet.userAddress).call()).div(this.constants.PRECISION);
    // this.maxStakeAmount = new BigNumber(await this.contract.MON_STAKER.methods.maxStake.call().call()).div(this.constants.PRECISION);
    // this.doomFee = new BigNumber(await this.contract.MON_STAKER.methods.doomFee.call().call()).div(this.constants.PRECISION);
    // this.doomBalance = new BigNumber(await this.contract.MON_STAKER.methods.doomBalances(this.wallet.userAddress).call()).div(this.constants.PRECISION);
    // this.blockNumber = this.contract.currBlock;


    // this.pendingDoomBalance = new BigNumber(await this.contract.MON_STAKER.methods.pendingDoom(this.wallet.userAddress).call()).div(this.constants.PRECISION);

    // let stakeRecords = await this.contract.MON_STAKER.methods.stakeRecords(this.wallet.userAddress).call();
    // this.stakedXmon = new BigNumber(stakeRecords["amount"]).div(this.constants.PRECISION);

    // this.unlockBlock = new BigNumber(await this.contract.MON_STAKER.methods.nextSummonTime(this.wallet.userAddress).call());
    // this.baseDelay = new BigNumber(await this.contract.MON_STAKER.methods.startDelay.call().call());
    // this.currentDelay = new BigNumber(await this.contract.MON_STAKER.methods.summonDelay(this.wallet.userAddress).call());
    // this.resetFee = new BigNumber(await this.contract.MON_STAKER.methods.resetFee.call().call()).div(this.constants.PRECISION);

    let rawResult = await this.contract.MULTICALL.methods.aggregate([
      {
        // 0
        target: this.constants.XMON_ADDRESS,
        callData: this.contract.XMON.methods.balanceOf(this.wallet.userAddress).encodeABI()
      },
      {
        // 1
        target: this.constants.MON_STAKER_ADDRESS,
        callData: this.contract.MON_STAKER.methods.maxStake.call().encodeABI()
      },
      {
        // 2
        target: this.constants.MON_STAKER_ADDRESS,
        callData: this.contract.MON_STAKER.methods.doomFee.call().encodeABI()
      },
      {
        // 3
        target: this.constants.MON_STAKER_ADDRESS,
        callData: this.contract.MON_STAKER.methods.doomBalances(this.wallet.userAddress).encodeABI()
      },
      {
        // 4
        target: this.constants.MON_STAKER_ADDRESS,
        callData: this.contract.MON_STAKER.methods.pendingDoom(this.wallet.userAddress).encodeABI()
      },
      {
        // 5
        target: this.constants.MON_STAKER_ADDRESS,
        callData: this.contract.MON_STAKER.methods.nextSummonTime(this.wallet.userAddress).encodeABI()
      },
      {
        // 6
        target: this.constants.MON_STAKER_ADDRESS,
        callData: this.contract.MON_STAKER.methods.startDelay.call().encodeABI()
      },
      {
        // 7
        target: this.constants.MON_STAKER_ADDRESS,
        callData: this.contract.MON_STAKER.methods.summonDelay(this.wallet.userAddress).encodeABI()
      },
      {
        // 8
        target: this.constants.MON_STAKER_ADDRESS,
        callData: this.contract.MON_STAKER.methods.resetFee.call().encodeABI()
      },
      {
        // 9
        target: this.constants.MON_STAKER_ADDRESS,
        callData: this.contract.MON_STAKER.methods.stakeRecords(this.wallet.userAddress).encodeABI()
      }
    ]).call();
    
    this.blockNumber = rawResult["blockNumber"];

    // TODO: consider using a key value indexer instead of just array indices

    let result = rawResult["returnData"];
    this.xmonBalance = new BigNumber(this.wallet.web3.eth.abi.decodeParameter('uint256', result[0])).div(this.constants.PRECISION);
    this.maxStakeAmount = new BigNumber(this.wallet.web3.eth.abi.decodeParameter('uint256', result[1])).div(this.constants.PRECISION);
    this.doomFee = new BigNumber(this.wallet.web3.eth.abi.decodeParameter('uint256', result[2])).div(this.constants.PRECISION);
    this.doomBalance = new BigNumber(this.wallet.web3.eth.abi.decodeParameter('uint256', result[3])).div(this.constants.PRECISION);
    this.pendingDoomBalance = new BigNumber(this.wallet.web3.eth.abi.decodeParameter('uint256', result[4])).div(this.constants.PRECISION);
    this.unlockBlock = new BigNumber(this.wallet.web3.eth.abi.decodeParameter('uint256', result[5]));
    this.baseDelay = new BigNumber(this.wallet.web3.eth.abi.decodeParameter('uint256', result[6]));
  }

  stake() {
    if (!this.stakeAmount) {
      this.stakeAmount = '0';
    }
    const formattedStakeAmount = new BigNumber(this.stakeAmount).times(this.constants.PRECISION).integerValue().toFixed();

    const func = this.contract.MON_STAKER.methods.addStake(formattedStakeAmount);
    this.wallet.sendTxWithToken(func, this.contract.XMON, this.constants.MON_STAKER_ADDRESS, formattedStakeAmount,
      200000, () => { }, () => {
        this.loadData();
      }, () => { });
  }

  removeStake() {
    const func = this.contract.MON_STAKER.methods.removeStake();
    this.wallet.sendTx(func, () => { }, () => {}, () => { });
  }

  claimDoom() {
    const func = this.contract.MON_STAKER.methods.awardDoom(this.wallet.userAddress);
    this.wallet.sendTx(func, () => { }, () => {}, () => { });
  }

  claimMon() {
    const func = this.contract.MON_STAKER.methods.claimMon();
    this.wallet.sendTx(func, () => { }, () => {}, () => { });
  }

  resetDelay() {
    const func = this.contract.MON_STAKER.methods.resetDelay();
    this.wallet.sendTx(func, () => { }, () => {}, () => { });
  }
}
