import { Component, OnInit } from '@angular/core';
import BigNumber from 'bignumber.js';
import { ConstantsService } from '../constants.service';
import { ContractService } from '../contract.service';
import { UtilsService } from '../utils.service';
import { WalletService } from '../wallet.service';

@Component({
  selector: 'app-minter',
  templateUrl: './minter.component.html',
  styleUrls: ['./minter.component.css']
})
export class MinterComponent implements OnInit {

  name: any;
  symbol: any;
  salt: any;
  createdAddress: any;

  constructor(public wallet: WalletService, public contract: ContractService, public constants: ConstantsService, public utils: UtilsService) {
  }

  ngOnInit(): void {
    this.createdAddress = "";
  }

  reverse(s){
    return s.split("").reverse().join("");
  }

  randomName() {
    let time = this.reverse(Date.now().toString());
    let addy = this.wallet.userAddress;
    let arr = [...time];
    let name = addy.replace(/.{1,2}/g, match => match + arr.shift());
    name = name.substring(1, 15);
    return name;
  }

  async createToken() {
    let salt = this.wallet.web3.utils.asciiToHex(this.randomName());
    this.createdAddress = await this.contract.TOKEN_FACTORY.methods.getXTokenAddress(salt).call();
    const func = this.contract.TOKEN_FACTORY.methods.createXToken(this.name, this.symbol, salt);
    await this.wallet.sendTx(func, ()=>{}, ()=>{}, (e) => {alert(e)});
  }
}
