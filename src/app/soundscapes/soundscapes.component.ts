import { Component, OnInit } from '@angular/core';
import { WalletService } from '../wallet.service';
import { ContractService } from '../contract.service';
import { ConstantsService } from '../constants.service';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-soundscapes',
  templateUrl: './soundscapes.component.html',
  styleUrls: ['./soundscapes.component.css']
})
export class SoundscapesComponent implements OnInit {

  monIdList: any;
  soundscapesMetadataHashList: any;

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
    this.monIdList = [];
    this.soundscapesMetadataHashList = [];
  }

  async loadData() {
    let multicallFns = {
      "monIds": {
        target: this.constants.NFT_AGGREGATOR_ADDRESS,
        callData: this.contract.NFT_AGG.methods.getIds(this.constants.MON_MINTER_ADDRESS, this.wallet.userAddress).encodeABI() 
      }
    };
    let results = await this.utils.makeMulticall(multicallFns);
    let monIdList = await this.utils.decode("uint256[]", results["monIds"]);
    let filteredMonIdList = [];
    for (let i of monIdList) {
      try {
        await this.contract.SOUNDSCAPES.methods.ownerOf(i).call();
      }
      catch(e) {
        filteredMonIdList.push(i);
      }
    }
    this.monIdList = filteredMonIdList;
    const metadata = await fetch(this.constants.SOUNDSCAPES_METADATA_PATH);
    this.soundscapesMetadataHashList = await metadata.json();
  }

  async claim(id) {
    let uri = this.soundscapesMetadataHashList[parseInt(id)]["Hash"];
    const func = this.contract.SOUNDSCAPES.methods.claim(id, uri);
    await this.wallet.sendTx(func, 
      ()=>{
        this.monIdList = this.monIdList.filter(item => item !== id);
      }, 
      ()=>{}, 
      (e)=>{alert(e);}
    );
  }

  allClaimed() {
    return this.monIdList.length === 0;
  }

}
