import { Injectable } from '@angular/core';
import { ConstantsService } from './constants.service';
import { WalletService } from './wallet.service';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor(public wallet: WalletService, public constants: ConstantsService) { 
    this.loadData();
  }

  public get ClAIMER() {
    const abi = require('../assets/abi/Claimer.json');
    const address = this.constants.CLAIMER_ADDRESS;
    return new this.wallet.web3.eth.Contract(abi, address); 
  }

  public get XMON() {
    const abi = require('../assets/abi/ERC20.json');
    const address = this.constants.XMON_ADDRESS;
    return new this.wallet.web3.eth.Contract(abi, address); 
  }

  public get MON_MINTER() {
    const abi = require('../assets/abi/MonMinter.json');
    const address = this.constants.MON_MINTER_ADDRESS;
    return new this.wallet.web3.eth.Contract(abi, address); 
  }

  public get MON_STAKER() {
    const abi = require('../assets/abi/MonStaker2.json');
    const address = this.constants.MON_STAKER_ADDRESS;
    return new this.wallet.web3.eth.Contract(abi, address); 
  }

  public get MON_SPAWNER() {
    const abi = require('../assets/abi/MonSpawner.json');
    const address = this.constants.MON_SPAWNER_ADDRESS;
    return new this.wallet.web3.eth.Contract(abi, address); 
  }

  public get MULTICALL() {
    const abi = require('../assets/abi/Multicall.json');
    const address = this.constants.MULTICALL_ADDRESS;
    return new this.wallet.web3.eth.Contract(abi, address); 
  }

  public get NFT_AGG() {
    const abi = require('../assets/abi/NFTAggregator.json');
    const address = this.constants.NFT_AGGREGATOR_ADDRESS;
    return new this.wallet.web3.eth.Contract(abi, address);
  }

  public get LP_POOL_REWARDS() {
    const abi = require('../assets/abi/Rewards.json');
    const address = this.constants.LP_POOL_REWARDS_ADDRESS;
    return new this.wallet.web3.eth.Contract(abi, address);
  }

  public get XMON_ETH_LP() {
    const abi = require('../assets/abi/ERC20.json');
    const address = this.constants.XMON_ETH_LP_TOKEN_ADDRESS;
    return new this.wallet.web3.eth.Contract(abi, address); 
  }

  public get NFT_SENDER() {
    const abi = require('../assets/abi/NFTSender.json');
    const address = this.constants.NFT_SENDER_ADDRESS;
    return new this.wallet.web3.eth.Contract(abi, address);
  }

  public get MON_REGISTRY() {
    const abi = require('../assets/abi/MonRegistry.json');
    const address = this.constants.MON_REGISTRY_ADDRESS;
    return new this.wallet.web3.eth.Contract(abi, address);
  }

  public get OLD_0XMONS() {
    const abi = require('../assets/abi/ERC721.json');
    const address = this.constants.OLD_0XMONS_ADDRESS;
    return new this.wallet.web3.eth.Contract(abi, address);
  }

  public get WETH() {
    const abi = require('../assets/abi/ERC20.json');
    const address = this.constants.WETH_ADDRESS;
    return new this.wallet.web3.eth.Contract(abi, address); 
  }

  public get DAI() {
    const abi = require('../assets/abi/ERC20.json');
    const address = this.constants.DAI_ADDRESS;
    return new this.wallet.web3.eth.Contract(abi, address); 
  }

  public get MULTISENDER() {
    const abi = require('../assets/abi/Multisender.json');
    const address = this.constants.MULTISENDER_ADDRESS;
    return new this.wallet.web3.eth.Contract(abi, address); 
  }

  public get MON_STAKER_2() {
    const abi = require('../assets/abi/MonStaker3.json');
    const address = this.constants.MON_STAKER_2_ADDRESS;
    return new this.wallet.web3.eth.Contract(abi, address); 
  }

  public get TOKEN_FACTORY() {
    const abi = require('../assets/abi/TokenFactory.json');
    const address = this.constants.TOKEN_FACTORY_ADDRESS;
    return new this.wallet.web3.eth.Contract(abi, address); 
  }

  public get XXMON() {
    const abi = require('../assets/abi/XXMON.json');
    const address = this.constants.XXMON_ADDRESS;
    return new this.wallet.web3.eth.Contract(abi, address); 
  }
  
  public get PROTOCARDS() {
    const abi = require('../assets/abi/Protocards.json');
    const address = this.constants.PROTOCARDS_ADDRESS;
    return new this.wallet.web3.eth.Contract(abi, address); 
  }

  public ERC20(address) {
    const abi = require('../assets/abi/ERC20.json');
    return new this.wallet.web3.eth.Contract(abi, address); 
  }

  public ERC721(address) {
    const abi = require('../assets/abi/ERC721.json');
    return new this.wallet.web3.eth.Contract(abi, address); 
  }

  public ERC1155(address) {
    const abi = require('../assets/abi/ERC1155.json');
    return new this.wallet.web3.eth.Contract(abi, address); 
  }

  async loadData() {
    // this.currBlock = new BigNumber(await this.wallet.web3.eth.getBlockNumber());
  }
}
