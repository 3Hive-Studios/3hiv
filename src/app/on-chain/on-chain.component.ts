import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConstantsService } from '../constants.service';
import { ContractService } from '../contract.service';
import { UtilsService } from '../utils.service';
import { WalletService } from '../wallet.service';
import { DomSanitizer } from '@angular/platform-browser';
import { decode } from 'punycode';

@Component({
  selector: 'app-on-chain',
  templateUrl: './on-chain.component.html',
  styleUrls: ['./on-chain.component.css']
})
export class OnChainComponent implements OnInit {

  txHash: any;
  monData: any;
  width: any;

  constructor(public wallet: WalletService, public contract: ContractService, public constants: ConstantsService, private utils: UtilsService, private activatedRoute: ActivatedRoute, private sanitizer:DomSanitizer) {
    this.resetData();
  }

  resetData() {
    this.monData = {};
    this.width = 14;
  }

  ngOnInit(): void {
    this.txHash = this.activatedRoute.snapshot.paramMap.get('txHash');
    if (this.wallet.connected) {
      this.loadData();
    }
    this.wallet.connectedEvent.subscribe(() => {
      this.loadData();
    });
    this.wallet.errorEvent.subscribe(() => {
      this.resetData();
    });

    this.activatedRoute.params.subscribe(routeParams => {
      this.txHash = routeParams.txHash;
      if (this.wallet.connected) {
        this.loadData();
      }
    });
  }

  async loadData() {
    let input, decodedInput, decodedArr;
    if (this.txHash.length < 20) {
      let multicallFns = {
        "staticHash": {
          target: this.constants.MON_REGISTRY_ADDRESS,
          // Note "txHash" is actually mon ID, and we do a call to look up the actual data on-chain
          callData: this.contract.MON_REGISTRY.methods.monDataWithStatic(this.txHash).encodeABI()
        }
      }
      let result = await this.utils.makeMulticall(multicallFns);
      input = await this.utils.decode("bytes", result["staticHash"]);
      decodedInput = this.wallet.web3.utils.toAscii(input);
      decodedArr = decodedInput.split("|");
    }
    else {
      input = await this.getArgsByTxHash(this.txHash);
      decodedInput = this.wallet.web3.utils.toAscii(input);
      decodedArr = decodedInput.substring(68).split("|");
    }
    this.monData["name"] = decodedArr[0];
    this.monData["epithets"] = decodedArr[1];
    this.monData["lore"] = decodedArr[2];
    await this.loadImg(decodedArr[3]);
  }

  async getArgsByTxHash(hash) {
    let tx = await this.wallet.web3.eth.getTransaction(hash);
    return tx.input;
  }

  async loadImg(str) {
    let decodedInput = this.sanitizer.bypassSecurityTrustUrl('data:image/gif;base64,' + str);
    this.monData["base64Safe"] = decodedInput;
  }

  updateWidth(num) {
    this.width = this.width + num;
  }

}
