import { Injectable } from '@angular/core';
import { ConstantsService } from './constants.service';
import { WalletService } from './wallet.service';
import BigNumber from 'bignumber.js';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  token: any;
  tokenBalance: any;
  tokenSymbol: string;
  monsLeft: any;
  maxMons: any;
  totalMons: any;
  mergePrice: any;
  buyPrice: any;
  currBlock: any;

  constructor(public wallet: WalletService, public constants: ConstantsService) { 
    this.token = undefined;
    this.tokenBalance = new BigNumber(0);
    this.tokenSymbol = '';
    this.monsLeft = new BigNumber(0);
    this.mergePrice = new BigNumber(0);
    this.buyPrice = new BigNumber(0);
    this.loadData();
  }

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

  async loadData() {
    this.maxMons = new BigNumber(await this.MONS.methods.maxMons.call().call());
    this.totalMons = await this.MONS.methods.getTotalMons().call();
    this.monsLeft = this.maxMons.minus(this.totalMons);

    const tokenAddress = await this.MONS.methods.token.call().call();
    this.token = this.ERC20(tokenAddress);
    this.tokenSymbol = await this.token.methods.symbol.call().call();
    this.buyPrice = new BigNumber(await this.MONS.methods.tokenPrice.call().call()).div(this.constants.PRECISION);
    this.mergePrice = new BigNumber(await this.MONS.methods.mergePrice.call().call()).div(this.constants.PRECISION);

    this.currBlock = new BigNumber(await this.wallet.web3.eth.getBlockNumber());
  }
}
