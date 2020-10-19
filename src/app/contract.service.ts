import { Injectable } from '@angular/core';
import { ConstantsService } from './constants.service';
import { WalletService } from './wallet.service';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor(public wallet: WalletService, public constants: ConstantsService) { }

  public get YFB() {
    const abi = require('../assets/abi/ERC20.json');
    const address = this.constants.YFB_ADDRESS;
    return new this.wallet.web3.eth.Contract(abi, address);
  }

  public get STAKER() {
    const abi = require('../assets/abi/Staker.json');
    const address = this.constants.STAKER_ADDRESS;
    return new this.wallet.web3.eth.Contract(abi, address);
  }

  public get MONS() {
    const abi = require('../assets/abi/Mons.json');
    const address = this.constants.MON_ADDRESS;
    return new this.wallet.web3.eth.Contract(abi, address);
  }

  public get DAI() {
    const abi = require('../assets/abi/ERC20.json');
    const address = this.constants.DAI_ADDRESS;
    return new this.wallet.web3.eth.Contract(abi, address); 
  }

  public ERC20(address) {
    const abi = require('../assets/abi/ERC20.json');
    return new this.wallet.web3.eth.Contract(abi, address); 
  }
}
