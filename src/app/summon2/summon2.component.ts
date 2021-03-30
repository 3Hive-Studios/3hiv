import { Component, OnInit } from '@angular/core';
import BigNumber from 'bignumber.js';
import { ConstantsService } from '../constants.service';
import { ContractService } from '../contract.service';
import { UtilsService } from '../utils.service';
import { WalletService } from '../wallet.service';

@Component({
  selector: 'app-summon2',
  templateUrl: './summon2.component.html',
  styleUrls: ['./summon2.component.css']
})
export class Summon2Component implements OnInit {

  constructor(public wallet: WalletService, public contract: ContractService, public constants: ConstantsService, public utils: UtilsService) { 
    this.resetData();
  }

  stakeAmount: string;
  stakedXmon: BigNumber;
  maxStakeAmount: BigNumber;
  xmonBalance: BigNumber;
  doomBalance: BigNumber;
  doomFee: BigNumber;
  blockNumber: any;
  numMons: BigNumber;
  maxMons: BigNumber;

  canSummon: boolean;
  doomPerDay: BigNumber;
  contractAddress: any;

  claimMonStart: any;
  lastMigrationDate: any;

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
    this.xmonBalance = new BigNumber(0);
    this.doomBalance = new BigNumber(0);
    this.doomFee = new BigNumber(0);
    this.numMons = new BigNumber(0);
    this.maxMons = new BigNumber(0);
    this.canSummon = false;
    this.doomPerDay = new BigNumber(0);
    this.contractAddress = this.constants.MON_STAKER_2_ADDRESS;
  }

  async loadData() {

    const multicallFns = {
      "xmonBalance": {
        target: this.constants.XMON_ADDRESS,
        callData: this.contract.XMON.methods.balanceOf(this.wallet.userAddress).encodeABI()
      },
      "doomFee": {
        target: this.constants.MON_STAKER_2_ADDRESS,
        callData: this.contract.MON_STAKER_2.methods.baseDoomFee().encodeABI()
      },
      "doomBalance": {
        target: this.constants.MON_STAKER_2_ADDRESS,
        callData: this.contract.MON_STAKER_2.methods.doomBalances(this.wallet.userAddress).encodeABI()
      },
      "pendingDoomBalance": {
        target: this.constants.MON_STAKER_2_ADDRESS,
        callData: this.contract.MON_STAKER_2.methods.pendingDoom(this.wallet.userAddress).encodeABI()
      },
      "stakeRecords": {
        target: this.constants.MON_STAKER_2_ADDRESS,
        callData: this.contract.MON_STAKER_2.methods.stakeRecords(this.wallet.userAddress).encodeABI()
      },
      "numMons": {
        target: this.constants.MON_STAKER_2_ADDRESS,
        callData: this.contract.MON_STAKER_2.methods.numMons().encodeABI()
      },
      "maxMons": {
        target: this.constants.MON_STAKER_2_ADDRESS,
        callData: this.contract.MON_STAKER_2.methods.maxMons().encodeABI()
      },
      "claimMonStart": {
        target: this.constants.MON_STAKER_2_ADDRESS,
        callData: this.contract.MON_STAKER_2.methods.claimMonStart().encodeABI()
      },
      "lastMigrationDate": {
        target: this.constants.MON_STAKER_2_ADDRESS,
        callData: this.contract.MON_STAKER_2.methods.lastMigrationDate().encodeABI()
      }
    };

    const multicallKeys = Object.keys(multicallFns);
    const multicallValues = Object.values(multicallFns);
    let rawResult = await this.contract.MULTICALL.methods.aggregate(multicallValues).call();
    let multicallResults = this.utils.zipObject(multicallKeys, rawResult["returnData"]);

    this.blockNumber = rawResult["blockNumber"];
    this.xmonBalance = new BigNumber(this.wallet.web3.eth.abi.decodeParameter('uint256', multicallResults["xmonBalance"])).div(this.constants.PRECISION);
    this.doomFee = new BigNumber(this.wallet.web3.eth.abi.decodeParameter('uint256', multicallResults["doomFee"])).div(this.constants.DOOM_SCALING_2);
    let currDoomBalance = new BigNumber(this.wallet.web3.eth.abi.decodeParameter('uint256', multicallResults["doomBalance"]))
    let pendingDoomBalance = new BigNumber(this.wallet.web3.eth.abi.decodeParameter('uint256', multicallResults["pendingDoomBalance"]));
    this.doomBalance = currDoomBalance.plus(pendingDoomBalance).div(this.constants.DOOM_SCALING_2);
    this.stakedXmon = new BigNumber(this.wallet.web3.eth.abi.decodeParameter({
      "stakeRecord": {
        "amount": "uint256",
        "startBlock": "uint256"
      }
    }, multicallResults["stakeRecords"])["amount"]).div(this.constants.PRECISION);
    this.numMons = new BigNumber(this.wallet.web3.eth.abi.decodeParameter('uint256', multicallResults["numMons"]));
    this.maxMons = new BigNumber(this.wallet.web3.eth.abi.decodeParameter('uint256', multicallResults["maxMons"]));
    let claimMonStartNum = this.wallet.web3.eth.abi.decodeParameter('uint256', multicallResults["claimMonStart"]);
    this.claimMonStart = new Date(claimMonStartNum*1000);
    this.lastMigrationDate = this.wallet.web3.eth.abi.decodeParameter('uint256', multicallResults["lastMigrationDate"]);
    this.lastMigrationDate = new Date(this.lastMigrationDate*1000);

    // Set variables based off on-chain info
    let pastSummonTime = Math.floor(Date.now() / 1000) - parseInt(claimMonStartNum) >= 0;
    this.canSummon = (this.doomBalance.gte(this.doomFee)) && (this.numMons < this.maxMons) && pastSummonTime;
    this.doomPerDay = (this.stakedXmon.times(this.constants.PRECISION)).sqrt().times(new BigNumber(9*24)).div(new BigNumber(2)).times(new BigNumber(60)).div(this.constants.DOOM_SCALING_2);
  }

  stake() {
    if (this.stakeAmount === '0') {
      alert("Must have stake greater than 0!");
      return;
    }
    const formattedStakeAmount = new BigNumber(this.stakeAmount).times(this.constants.PRECISION).integerValue().toFixed();
    const func = this.contract.MON_STAKER_2.methods.addStake(formattedStakeAmount);
    this.wallet.sendTxWithToken(func, this.contract.XMON, this.constants.MON_STAKER_2_ADDRESS, formattedStakeAmount,
      200000, () => {
      }, () => {
        this.loadData();
      }, () => { });
  }

  removeStake() {
    const func = this.contract.MON_STAKER_2.methods.removeStake();
    this.wallet.sendTx(func, () => { }, () => {
      this.loadData();
    }, () => { });
  }

  claimMon() {
    const func = this.contract.MON_STAKER_2.methods.claimMon();
    this.wallet.sendTx(func, () => { }, () => {
      this.loadData();
    }, (e) => {
      alert(e);
    });
  }

  migrateDoom() {
    const func = this.contract.MON_STAKER_2.methods.migrateDoom();
    this.wallet.sendTx(func, () => { }, () => {
      this.loadData();
    }, (e) => { 
      alert(e);
    });
  }

  fillForm(value) {
    this.stakeAmount = value.toString();
  }
}
