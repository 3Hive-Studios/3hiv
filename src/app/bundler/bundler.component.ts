import { Component, OnInit } from '@angular/core';
import BigNumber from 'bignumber.js';
import { ConstantsService } from '../constants.service';
import { ContractService } from '../contract.service';
import { UtilsService } from '../utils.service';
import { WalletService } from '../wallet.service';
import autosize from 'autosize';

@Component({
  selector: 'app-bundler',
  templateUrl: './bundler.component.html',
  styleUrls: ['./bundler.component.css']
})
export class BundlerComponent implements OnInit {

  placeholder: string;
  tokenType: any;
  senderType: any;
  tokenAddress: any;
  lockLabel: string;
  tokenSymbol: any;
  tokenLogo: any;
  erc721Address: any;
  erc721Id: any;
  rewardTokenType: any;
  rewardTokenAddress: any;
  rewardValues: any;
  rewardToken1155Id: any;

  constructor(public wallet: WalletService, public contract: ContractService, public constants: ConstantsService, public utils: UtilsService) { 
    this.resetData();
  }

  ngOnInit(): void {
    
    // Auto-resize the textarea
    autosize(document.querySelector('textarea'));

    if (this.wallet.connected) {
    }
    this.wallet.connectedEvent.subscribe(() => {
    });
    this.wallet.errorEvent.subscribe(() => {
      this.resetData();
    });
  }

  resetData() {
    this.senderType = "address";
    this.tokenAddress = "";
    this.lockLabel = "Bundle";
    this.tokenSymbol = "";
    this.tokenLogo = "";
  }

  parseWith721Ids(decimals, data) {
    let splitData = data.split("\n");
    let erc721Addresses = [];
    let erc721Ids = [];
    let idsFor1155 = [];
    let amountsOrIds = [];
    let tokenAmt;
    for (let args of splitData) {
      let parsedArgs = args.split(",").map((s) => s.trim());
      erc721Addresses.push(parsedArgs[0]);
      erc721Ids.push(parsedArgs[1]);
      switch(parseInt(this.tokenType)) {
        case 20:
          tokenAmt = new BigNumber(parsedArgs[2]).times(10**decimals).integerValue().toFixed();
          amountsOrIds.push(tokenAmt);
          continue;
        case 721:
          amountsOrIds.push(parsedArgs[2]);
          continue;
        case 1155:
          // First is ID, then amount
          idsFor1155.push(new BigNumber(parsedArgs[2]));
          tokenAmt = new BigNumber(parsedArgs[3]);
          amountsOrIds.push(tokenAmt);
          continue;
      }
    }
    if (parseInt(this.tokenType) === 1155) {
      return([
        erc721Addresses,
        erc721Ids,
        idsFor1155,
        amountsOrIds
      ]);
    }
    else {
      return([
        erc721Addresses,
        erc721Ids,
        amountsOrIds
      ]);
    }
  }

  getPlaceholder() {
    if (this.tokenType == 1155) {
      return "Recipient ERC721 Address, Recipient Token ID, Locking Token ID, Locked Amount\
    0x3aada3e213abf8529606924d8d1c55cbdc70bf74, 11, 1, 10.5\
    0x4bacaaabe3e96959ddf3269d3092d5cea88fefe9, 10, 2, 0.2\
    ";
    }
    else if (this.tokenType == 721) {
      return "Recipient ERC721 Address, Recipient Token ID, Locking Token ID\
    0x3aada3e213abf8529606924d8d1c55cbdc70bf74, 11, 1\
    0x4bacaaabe3e96959ddf3269d3092d5cea88fefe9, 10, 2\
    ";
    }
    else if (this.tokenType == 20) {
      return "Recipient ERC721 Address, Recipient Token ID, Locked Amount\
      0x3aada3e213abf8529606924d8d1c55cbdc70bf74, 11, 10.5\
      0x4bacaaabe3e96959ddf3269d3092d5cea88fefe9, 10, 0.2\
      ";
    }
  }

  async lock(data) {
    let args, func, approveFunc, allowance;
    const maxAllowance = new BigNumber(2).pow(256).minus(1).integerValue().toFixed();
    args = this.parseWith721Ids(18, data);
    if (parseInt(this.tokenType) === 20) {
      let numTokensToSend = new BigNumber(0);
      for (let a of args[1]) {
        numTokensToSend = numTokensToSend.plus(new BigNumber(a));
      }
      numTokensToSend = numTokensToSend.times(this.constants.PRECISION);
      allowance = new BigNumber(await this.contract.ERC20(this.tokenAddress).methods.allowance(this.wallet.userAddress, this.constants.MULTISENDER_ADDRESS).call());
      if (allowance.lt(numTokensToSend)) {
        this.lockLabel = "Approving...";
        approveFunc = this.contract.ERC20(this.tokenAddress).methods.approve(this.constants.MULTISENDER_ADDRESS, maxAllowance);
        await this.wallet.sendTx(approveFunc, () => {
          this.lockLabel = "Bundle";
        }, () => {}, () => {});
      }
      func = this.contract.MULTISENDER.methods.set20To721Ids(
        args[0],
        args[1],
        args[2],
        this.tokenAddress
      );
      await this.wallet.sendTx(func, ()=>{}, ()=>{}, ()=>{});
    }
    if (parseInt(this.tokenType) === 721) {
      const isApproved = await this.contract.ERC721(this.tokenAddress).methods.isApprovedForAll(this.wallet.userAddress, this.constants.MULTISENDER_ADDRESS).call();
      if (! isApproved) {
        this.lockLabel = "Approving...";
        approveFunc = this.contract.ERC721(this.tokenAddress).methods.setApprovalForAll(this.constants.MULTISENDER_ADDRESS, true);
        await this.wallet.sendTx(approveFunc, () => {
          this.lockLabel = "Bundle";
        }, () => {}, () => {});
      }
      func = this.contract.MULTISENDER.methods.set721To721Ids(
        args[0],
        args[1],
        args[2],
        this.tokenAddress
      );
      await this.wallet.sendTx(func, ()=>{}, ()=>{}, ()=>{});
    }
    if (parseInt(this.tokenType) === 1155) {
      const isApproved = await this.contract.ERC1155(this.tokenAddress).methods.isApprovedForAll(this.wallet.userAddress, this.constants.MULTISENDER_ADDRESS).call();
      if (! isApproved) {
        this.lockLabel = "Approving...";
        approveFunc = this.contract.ERC1155(this.tokenAddress).methods.setApprovalForAll(this.constants.MULTISENDER_ADDRESS, true);
        await this.wallet.sendTx(approveFunc, () => {
          this.lockLabel = "Bundle";
        }, () => {}, () => {});
      }
      func = this.contract.MULTISENDER.methods.set1155to721Ids(
        args[0],
        args[1],
        args[2],
        args[3],
        this.tokenAddress
      );
      await this.wallet.sendTx(func, ()=>{}, ()=>{}, ()=>{});
    }
  }

  async unlockRewards() {
    let func;
    switch(parseInt(this.rewardTokenType)) {
      case 20:
        func = this.contract.MULTISENDER.methods.take20Rewards(this.erc721Address, this.erc721Id, this.rewardTokenAddress);
        await this.wallet.sendTx(func, ()=>{}, ()=>{}, ()=>{});
        break;
      case 721: 
        func = this.contract.MULTISENDER.methods.take721Rewards(this.erc721Address, this.erc721Id, this.rewardTokenAddress);
        await this.wallet.sendTx(func, ()=>{}, ()=>{}, ()=>{});
        break;
      case 1155:
        func = this.contract.MULTISENDER.methods.take1155Rewards(this.erc721Address, this.erc721Id, this.rewardTokenAddress, this.rewardToken1155Id);
        await this.wallet.sendTx(func, ()=>{}, ()=>{}, ()=>{});
        break;
    }
  }

  async getRewards() {
    let token = this.contract.ERC20(this.rewardTokenAddress);
    let tokenSymbol = await token.methods.symbol().call();
    switch(parseInt(this.rewardTokenType)) {
      case 20:
        let tokenAmt = new BigNumber(await this.contract.MULTISENDER.methods.erc20Rewards(this.erc721Address, this.erc721Id, this.rewardTokenAddress).call()).div(this.constants.PRECISION);
        this.rewardValues = tokenAmt + " " + tokenSymbol;
        break;
      case 721:
        let id1 = await this.contract.MULTISENDER.methods.erc721Rewards(this.erc721Address, this.erc721Id, this.rewardTokenAddress, 0).call();
        this.rewardValues = id1 + "..." + tokenSymbol;
        break;
      case 1155:
        let amt = await this.contract.MULTISENDER.methods.erc1155Rewards(this.erc721Address, this.erc721Id, this.rewardTokenAddress, this.rewardToken1155Id).call();
        this.rewardValues = amt + " " + tokenSymbol;
        break;
    }
  }

  async getToken() {
    let tokenList = require("../../assets/tokens.json");
    tokenList = tokenList["tokens"];
    for (let t of tokenList) {
      if (t["address"].toLowerCase() == this.tokenAddress.toLowerCase()) {
        this.tokenSymbol = t["symbol"];
        this.tokenLogo = t["logoURI"];
        return;
      }
    }
    let token = this.contract.ERC20(this.tokenAddress);
    this.tokenSymbol = await token.methods.symbol().call();
  }

}
