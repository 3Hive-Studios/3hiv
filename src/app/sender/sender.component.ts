import { Component, OnInit } from '@angular/core';
import BigNumber from 'bignumber.js';
import { ConstantsService } from '../constants.service';
import { ContractService } from '../contract.service';
import { UtilsService } from '../utils.service';
import { WalletService } from '../wallet.service';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css']
})
export class SenderComponent implements OnInit {

  rewardAmount: BigNumber;

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
    this.rewardAmount = new BigNumber(0);
  }

  loadData() {
  }

  parseData(decimals, erc721Data) {
    let args = erc721Data.split("\n");
    let erc721s = [];
    let erc721IDs = [];
    let erc20Amounts = [];
    for (let triple of args) {
      let t = triple.trim().split(",");
      erc721s.push(t[0]);
      let id = new BigNumber(t[1]);
      erc721IDs.push(id);
      let tokenAmt = new BigNumber(t[2]).times(10**decimals).integerValue().toFixed();
      erc20Amounts.push(tokenAmt);
    }
    return([
      erc721s,
      erc721IDs,
      erc20Amounts
    ])
  }

  sendRewards(erc20Address, decimals, erc721Data) {
    let args = this.parseData(decimals, erc721Data);
    let numTokensToSend = new BigNumber(0);
    for (let a of args[2]) {
      numTokensToSend = numTokensToSend.plus(a)
    }
    const func = this.contract.NFT_SENDER.methods.sendRewards(
      args[0],
      args[1],
      erc20Address,
      args[2]
    );
    let gasLimit = 33000*args[2].length + 50000;
    this.wallet.sendTxWithToken(func, this.contract.ERC20(erc20Address), this.constants.NFT_SENDER_ADDRESS, numTokensToSend,
      gasLimit, () => {
      }, () => {
      }, () => { }
    );
  }

  setRewards(erc20Address, decimals, erc721Data) {
    let args = this.parseData(decimals, erc721Data);
    let numTokensToSend = new BigNumber(0);
    for (let a of args[2]) {
      numTokensToSend = numTokensToSend.plus(a)
    }
    const func = this.contract.NFT_SENDER.methods.setRewards(
      args[0],
      args[1],
      erc20Address,
      args[2]
    );
    let gasLimit = 12000*args[2].length + 80000;
    this.wallet.sendTxWithToken(func, this.contract.ERC20(erc20Address), this.constants.NFT_SENDER_ADDRESS, numTokensToSend,
      gasLimit, () => {
      }, () => {
      }, () => { }
    );
  }

  takeRewards(erc721Address, tokenID, erc20Address) {
    const func = this.contract.NFT_SENDER.methods.takeRewards(erc721Address, tokenID, erc20Address);
    this.wallet.sendTx(func, () => { }, () => {
      this.loadData();
    }, () => { });
  }

  async checkRewards(erc721Address, tokenID, erc20Address) {
    this.rewardAmount = new BigNumber(await this.contract.NFT_SENDER.methods.rewards(erc721Address, tokenID, erc20Address).call()).div(this.constants.PRECISION); 
  }
}
