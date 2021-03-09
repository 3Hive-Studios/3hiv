import { Component, OnInit } from '@angular/core';
import BigNumber from 'bignumber.js';
import { ConstantsService } from '../constants.service';
import { ContractService } from '../contract.service';
import { UtilsService } from '../utils.service';
import { WalletService } from '../wallet.service';
import autosize from 'autosize';

@Component({
  selector: 'app-multisender',
  templateUrl: './multisender.component.html',
  styleUrls: ['./multisender.component.css']
})
export class MultisenderComponent implements OnInit {

  ethFee: BigNumber;
  rawFee: BigNumber;
  xmonBalance: BigNumber;
  monBalance: BigNumber;
  feeWaived: boolean;
  placeholder: string;
  tokenType: any;
  senderType: any;
  tokenAddress: any;
  multisendLabel: string;
  tokenSymbol: any;
  tokenLogo: any;

  constructor(public wallet: WalletService, public contract: ContractService, public constants: ConstantsService, public utils: UtilsService) { 
    this.resetData();
  }

  ngOnInit(): void {
    
    // Auto-resize the textarea
    autosize(document.querySelector('textarea'));

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
    this.ethFee = new BigNumber(0);
    this.xmonBalance = new BigNumber(0);
    this.monBalance = new BigNumber(0);
    this.feeWaived = false;
    this.tokenType = 20;
    this.senderType = "address";
    this.tokenAddress = "";
    this.multisendLabel = "Multisend";
    this.tokenSymbol = "";
    this.tokenLogo = "";
  }

  async loadData() {
    let multicallFns = {
      "ethFee": {
        target: this.constants.MULTISENDER_ADDRESS,
        callData: this.contract.MULTISENDER.methods.ethFee().encodeABI()
      },
      "xmonBalance": {
        target: this.constants.XMON_ADDRESS,
        callData: this.contract.XMON.methods.balanceOf(this.wallet.userAddress).encodeABI()
      },
      "monBalance": {
        target: this.constants.MON_MINTER_ADDRESS,
        callData: this.contract.MON_MINTER.methods.balanceOf(this.wallet.userAddress).encodeABI()
      },
      "minXmon": {
        target: this.constants.MULTISENDER_ADDRESS,
        callData: this.contract.MULTISENDER.methods.minXmon().encodeABI()
      },
      "minXmonNFT": {
        target: this.constants.MULTISENDER_ADDRESS,
        callData: this.contract.MULTISENDER.methods.minXmonNFT().encodeABI()
      }
    }
    let result = await this.utils.makeMulticall(multicallFns);
    this.rawFee = new BigNumber(await this.utils.decode("uint256", result["ethFee"]));
    this.ethFee = this.rawFee.div(this.constants.PRECISION);
    this.xmonBalance = new BigNumber(await this.utils.decode("uint256", result["xmonBalance"])).div(this.constants.PRECISION);
    this.monBalance = new BigNumber(await this.utils.decode("uint256", result["monBalance"]));
    let minXmon = new BigNumber(await this.utils.decode("uint256", result["minXmon"]));
    let minXmonNFT = new BigNumber(await this.utils.decode("uint256", result["minXmonNFT"]));
    if (this.xmonBalance.times(this.constants.PRECISION).gte(minXmon) || this.monBalance.gte(minXmonNFT)) {
      this.feeWaived = true;
    }
  }

  parseWithAddresses(decimals, data) {
    let splitData = data.split("\n");
    let addresses = [];
    let idsFor1155 = [];
    let amountsOrIds = [];
    let tokenAmt;
    for (let args of splitData) {
      if (args !== "") {
        let parsedArgs = args.split(",").map((s) => s.trim());
        addresses.push(parsedArgs[0]);
        switch(parseInt(this.tokenType)) {
          case 20:
            tokenAmt = new BigNumber(parsedArgs[1]).times(10**decimals).integerValue().toFixed();
            amountsOrIds.push(tokenAmt);
            continue;
          case 721:
            amountsOrIds.push(parsedArgs[1]);
            continue;
          case 1155:
            // First is ID, then amount
            idsFor1155.push(parsedArgs[1]);
            tokenAmt = parsedArgs[2];
            amountsOrIds.push(tokenAmt);
            continue;
        }
      }
    }
    if (parseInt(this.tokenType) === 1155) {
      return([
        addresses,
        idsFor1155,
        amountsOrIds
      ]);
    }
    else {
      return([
        addresses,
        amountsOrIds
      ]);
    }
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
          amountsOrIds.push(parsedArgs[1]);
          continue;
        case 1155:
          // First is ID, then amount
          idsFor1155.push(parsedArgs[1]);
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
    if (this.senderType == "address") {
      if (this.tokenType == 1155) {
        return "Recipient Address, Token ID, Token Amount\
      0x3aada3e213abf8529606924d8d1c55cbdc70bf74, 1, 10.5\
      0x4bacaaabe3e96959ddf3269d3092d5cea88fefe9, 2, 0.2\
      ";
      }
      else if (this.tokenType == 721) {
        return "Recipient Address, Token ID\
        \
      0x3aada3e213abf8529606924d8d1c55cbdc70bf74, 1\
      0x4bacaaabe3e96959ddf3269d3092d5cea88fefe9, 2\
      ";
      }
      else if (this.tokenType == 20) {
        return "Recipient Address, Token Amount\
        \
        0x3aada3e213abf8529606924d8d1c55cbdc70bf74, 10.5\
        0x4bacaaabe3e96959ddf3269d3092d5cea88fefe9, 0.2\
        ";
      }
    }
    else if (this.senderType == "721") {
      if (this.tokenType == 1155) {
        return "Recipient ERC721 Address, Recipient Token ID, Sending Token ID, Token Amount\
      0x3aada3e213abf8529606924d8d1c55cbdc70bf74, 11, 1, 10.5\
      0x4bacaaabe3e96959ddf3269d3092d5cea88fefe9, 10, 2, 0.2\
      ";
      }
      else if (this.tokenType == 721) {
        return "Recipient ERC721 Address, Recipient Token ID, Sending Token ID\
      0x3aada3e213abf8529606924d8d1c55cbdc70bf74, 11, 1\
      0x4bacaaabe3e96959ddf3269d3092d5cea88fefe9, 10, 2\
      ";
      }
      else if (this.tokenType == 20) {
        return "Recipient ERC721 Address, Recipient Token ID, Token Amount\
        0x3aada3e213abf8529606924d8d1c55cbdc70bf74, 11, 10.5\
        0x4bacaaabe3e96959ddf3269d3092d5cea88fefe9, 10, 0.2\
        ";
      }
    }
  }
  
  async multisend(data) {
    let args, func, approveFunc, allowance;
    const maxAllowance = new BigNumber(2).pow(256).minus(1).integerValue().toFixed();

    if (this.senderType === "address") {
      args = this.parseWithAddresses(18, data);
    }
    else if (this.senderType === "721") {
      args = this.parseWith721Ids(18, data);
    }
    if (parseInt(this.tokenType) === 20) {
      let numTokensToSend = new BigNumber(0);
      for (let a of args[1]) {
        numTokensToSend = numTokensToSend.plus(new BigNumber(a));
      }
      numTokensToSend = numTokensToSend.times(this.constants.PRECISION);
      allowance = new BigNumber(await this.contract.ERC20(this.tokenAddress).methods.allowance(this.wallet.userAddress, this.constants.MULTISENDER_ADDRESS).call());
      if (allowance.lt(numTokensToSend)) {
        this.multisendLabel = "Approving...";
        approveFunc = this.contract.ERC20(this.tokenAddress).methods.approve(this.constants.MULTISENDER_ADDRESS, maxAllowance);
        await this.wallet.sendTx(approveFunc, () => {
          this.multisendLabel = "Multisend";
        }, () => {}, () => {});
      }
      if (this.senderType == "address") {
        func = this.contract.MULTISENDER.methods.send721Or20ToAddresses(
          args[0],
          args[1],
          this.tokenAddress
        );
      }
      if (this.senderType == "721") {
        func = this.contract.MULTISENDER.methods.send721Or20To721Ids(
          args[0],
          args[1],
          args[2],
          this.tokenAddress
        );
      }
      if (! this.feeWaived) {
        await this.wallet.sendTxWithValue(func, this.rawFee, ()=>{}, ()=>{}, ()=>{});
      }
      else {
        await this.wallet.sendTx(func, ()=>{}, ()=>{}, ()=>{});
      }
    }

    if (parseInt(this.tokenType) === 721) {
      const isApproved = await this.contract.ERC721(this.tokenAddress).methods.isApprovedForAll(this.wallet.userAddress, this.constants.MULTISENDER_ADDRESS).call();
      if (! isApproved) {
        this.multisendLabel = "Approving...";
        approveFunc = this.contract.ERC721(this.tokenAddress).methods.setApprovalForAll(this.constants.MULTISENDER_ADDRESS, true);
        await this.wallet.sendTx(approveFunc, () => {
          this.multisendLabel = "Multisend";
        }, () => {}, () => {});
      }
      if (this.senderType == "address") {
        func = this.contract.MULTISENDER.methods.send721Or20ToAddresses(
          args[0],
          args[1],
          this.tokenAddress
        );
      }
      if (this.senderType == "721") {
        func = this.contract.MULTISENDER.methods.send721Or20To721Ids(
          args[0],
          args[1],
          args[2],
          this.tokenAddress
        );
      }
      if (! this.feeWaived) {
        await this.wallet.sendTxWithValue(func, this.rawFee, ()=>{}, ()=>{}, ()=>{});
      }
      else {
        await this.wallet.sendTx(func, ()=>{}, ()=>{}, ()=>{});
      }
    }
    if (parseInt(this.tokenType) === 1155) {
      const isApproved = await this.contract.ERC1155(this.tokenAddress).methods.isApprovedForAll(this.wallet.userAddress, this.constants.MULTISENDER_ADDRESS).call();
      if (! isApproved) {
        this.multisendLabel = "Approving...";
        approveFunc = this.contract.ERC1155(this.tokenAddress).methods.setApprovalForAll(this.constants.MULTISENDER_ADDRESS, true);
        await this.wallet.sendTx(approveFunc, () => {
          this.multisendLabel = "Multisend";
        }, () => {}, () => {});
      }
      if (this.senderType == "address") {
        func = this.contract.MULTISENDER.methods.send1155ToAddresses(
          args[0],
          args[1],
          args[2],
          this.tokenAddress
        );
      }
      if (this.senderType == "721") {
        func = this.contract.MULTISENDER.methods.send1155To721Ids(
          args[0],
          args[1],
          args[2],
          args[3],
          this.tokenAddress
        );
      }
      if (! this.feeWaived) {
        await this.wallet.sendTxWithValue(func, this.rawFee, ()=>{}, ()=>{}, ()=>{});
      }
      else {
        await this.wallet.sendTx(func, ()=>{}, ()=>{}, ()=>{});
      }
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
