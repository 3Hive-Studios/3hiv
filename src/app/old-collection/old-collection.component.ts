import { Component, OnInit } from '@angular/core';
import { WalletService } from '../wallet.service';
import { ContractService } from '../contract.service';
import { ConstantsService } from '../constants.service';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-old-collection',
  templateUrl: './old-collection.component.html',
  styleUrls: ['./old-collection.component.css']
})
export class OldCollectionComponent implements OnInit {

  constructor(public wallet: WalletService, public contract: ContractService, public constants: ConstantsService, public utils: UtilsService) { 
    this.resetData();
  }

  monList: any;
  loading: boolean;

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
    this.monList = [];
    this.loading = true;
  }

  async loadData() {
    
    if (window["oldMonList"] != undefined) {
      this.monList = window["oldMonList"];
      this.loading = false;
    }
    else {
      let multicallFns = {
        "monIds": {
          target: this.constants.NFT_AGGREGATOR_ADDRESS,
          callData: this.contract.NFT_AGG.methods.getIds(this.constants.OLD_0XMONS_ADDRESS, this.wallet.userAddress).encodeABI() 
        }
      };

      let results = await this.utils.makeMulticall(multicallFns);
      let monIdList = await this.utils.decode("uint256[]", results["monIds"]);
      
      for (let i = 0; i < monIdList.length; i++) {
        let id = monIdList[i];
        let responseObj = await this.loadLocalData(id);
        let obj = {};
        obj["id"] = id;
        obj["name"] = responseObj["name"];
        obj["image"] =  responseObj["image"];
        this.monList.push(obj);
      }

      // cache locally
      window["oldMonList"] = this.monList;

      this.loading = false;
    }
  }

  async loadLocalData(id) {
    const response = await fetch(this.constants.OLD_MON_DATA);
    const fullResponseObj = await response.json();
    const responseObj = fullResponseObj[parseInt(id)];
    let monData = {};
    monData["name"] = responseObj["name"];
    monData["image"] = this.constants.S3_URL + responseObj["img"];
    return monData;
  }
}
