import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HostListener } from '@angular/core';
import { ConstantsService } from '../constants.service';
import { ContractService } from '../contract.service';
import { UtilsService } from '../utils.service';
import { WalletService } from '../wallet.service';
import { LocalDataService } from '../localData.service';
import BigNumber from 'bignumber.js';

@Component({
  selector: 'app-monster',
  templateUrl: './monster.component.html',
  styleUrls: ['./monster.component.css']
})
export class MonsterComponent implements OnInit {

  constructor(public wallet: WalletService, public contract: ContractService, public constants: ConstantsService, private utils: UtilsService, private activatedRoute: ActivatedRoute, private router: Router, public localData: LocalDataService) {
    this.resetData();
  }

  monId: string;
  monData: any;
  width: any;
  minWidth: any;
  maxWidth: any;
  isOwner: boolean;

  soundLink: any;

  staticURL: string;
  animURL: string;

  uploadIsStatic: any;
  registerIsStatic: any;
  directIsStatic: any;

  registerFee: any;
  txHash: any;
  enteredInTxHash: any;

  showRegister: boolean;

  prevId: any;
  nextId: any;
  hidePrev: boolean;
  hideNext: boolean;

  superStatic: string;

  canMintCard: boolean;

  resetData() {
    this.monData = {};
    this.width = 12;
    this.minWidth = 1;
    this.maxWidth = 100;
    this.isOwner = false;
    this.enteredInTxHash = '';
    this.showRegister = true;
    this.superStatic = "";
    this.canMintCard = false;
  }

  ngOnInit(): void {
    this.hidePrev = true;
    this.hideNext = true;
    this.activatedRoute.params.subscribe(routeParams => {
      this.monId = routeParams.id;
      this.updatePrevNextIds();
      if (this.localData.dataLoaded) {
        this.loadLocalData();
      }
      this.localData.dataLoadedEvent.subscribe(() => {
        this.loadLocalData();
      });
      if (this.wallet.connected) {
        this.loadData();
      }
      this.wallet.connectedEvent.subscribe(() => {
        this.loadData();
      });
    });
  }

  updatePrevNextIds() {
    this.prevId = parseInt(this.monId)-1;
    this.nextId = parseInt(this.monId)+1;
  }

  async loadData() {

    this.updatePrevNextIds();

    if (parseInt(this.monId) >= 5 && parseInt(this.monId) <= 132) {
      try {
        await this.contract.PROTOCARDS.methods.ownerOf(this.monId).call();
      }
      catch(e) {
        this.canMintCard = true;
      }
    }

    // Check if width is cached
    if (window["width"] !== undefined) {
      this.width = parseInt(window["width"]);
    }

    // Check if already stored
    if (window["mon" + this.monId] !== undefined && window["mon" + this.monId]["staticHash"] !== undefined) {
      let cachedResponse = window["mon" + this.monId];
      this.monData = Object.assign({}, cachedResponse);
      this.isOwner = this.monData["isOwner"];
    }

    // Otherwise make the web3 request
    else {
      let multicallFns = {
        "monData": {
          target: this.constants.MON_MINTER_ADDRESS,
          callData: this.contract.MON_MINTER.methods.monRecords(this.monId).encodeABI()
        },
        "tokenURI": {
          target: this.constants.MON_MINTER_ADDRESS,
          callData: this.contract.MON_MINTER.methods.tokenURI(this.monId).encodeABI()
        },
        "numMons": {
          target: this.constants.MON_MINTER_ADDRESS,
          callData: this.contract.MON_MINTER.methods.totalSupply().encodeABI()
        },
        "staticHash": {
          target: this.constants.MON_REGISTRY_ADDRESS,
          callData: this.contract.MON_REGISTRY.methods.monDataWithStatic(this.monId).encodeABI()
        },
        "animHash": {
          target: this.constants.MON_REGISTRY_ADDRESS,
          callData: this.contract.MON_REGISTRY.methods.monDataWithAnimation(this.monId).encodeABI()
        },
        "owner": {
          target: this.constants.MON_MINTER_ADDRESS,
          callData: this.contract.MON_MINTER.methods.ownerOf(this.monId).encodeABI()
        },
        "registerFee": {
          target: this.constants.MON_REGISTRY_ADDRESS,
          callData: this.contract.MON_REGISTRY.methods.fee().encodeABI()
        }
      }
      let result = await this.utils.makeMulticall(multicallFns);
      let monStruct = this.utils.decode({
        "parentStruct": {
          "summoner": "address",
          "parent1Id": "uint256",
          "parent2Id": "uint256",
          "minterContract": "address",
          "contractOrder": "uint256",
          "gen": "uint256",
          "bits": "uint256",
          "exp": "uint256",
          "rarity": "uint256"
        }
      }, result["monData"]);
      let owner = await this.utils.decode("address", result["owner"]);
      this.isOwner = owner.toLowerCase() == this.wallet.userAddress;
      this.monData["isOwner"] = owner.toLowerCase() == this.wallet.userAddress;
      this.registerFee = new BigNumber(await this.utils.decode("uint256", result["registerFee"])).div(this.constants.PRECISION);
      this.monData["staticHash"] = await this.utils.decode("bytes", result["staticHash"]);
      if (this.monData["staticHash"] != null) {
        this.monData["isStaticUploaded"] = true;
         // If it's longer than a tx hash, we set it to be the mon id so we let the on-chain component handle it
        if (this.monData["staticHash"].length > 66) {
          this.monData["staticHash"] = this.monId;
          this.monData["superStatic"] = "super";
        }
      }
      else {
        this.monData["isStaticUploaded"] = false;
      }
      this.monData["animHash"] = await this.utils.decode("bytes", result["animHash"]);
      if (this.monData["animHash"] != null) {
        this.monData["isAnimUploaded"] = true;
      }
      else {
        this.monData["isAnimUploaded"] = false;
      }
      if (this.monData["isStaticUploaded"] && this.monData["isAnimUploaded"]) {
        this.showRegister = false;
      }

      // These are from on-chain
      this.monData["parent1Id"] = monStruct["parent1Id"];
      this.monData["parent2Id"] = monStruct["parent2Id"];
      this.monData["gen"] = monStruct["gen"];
      this.monData["rarity"] = monStruct["rarity"];
      this.monData["contractOrder"] = monStruct["contractOrder"];

      // cache locally
      window["mon" + this.monId] = Object.assign({}, this.monData);
    }
  }

  async loadLocalData() {

    // Load the 0xmon info
    const responseObj = this.localData.allMonData[parseInt(this.monId)];
    this.monData["name"] = responseObj["Name"];
    this.monData["epithets"] = responseObj["Epithets"];
    this.monData["lore"] = responseObj["Description"];
    this.monData["rarity"] = responseObj["Series"];
    let staticPath = responseObj["Image"].replace("OPT", "STATIC");
    let animPath = responseObj["Image"];
    this.staticURL = this.constants.IMAGE_PATH + staticPath;
    this.animURL = this.constants.IMAGE_PATH + animPath;
    this.monData["img"] = this.constants.IMAGE_PATH + animPath;

    // Load the Soundscape sound
    this.soundLink = this.localData.allSounds[parseInt(this.monId)]["animation_url"];
  }

  async uploadData() {
    let imageURL;
    if (this.uploadIsStatic == "static") {
      imageURL = this.staticURL;
    }
    else if (this.uploadIsStatic == "anim") {
      imageURL = this.animURL;
    }
    else {
      return;
    }
    let response = await fetch(imageURL);
    let imgBlob = await response.blob();
    let reader = new FileReader();
    reader.readAsDataURL(imgBlob); 
    reader.onloadend = () => {
      let imageBinary = <string> reader.result;
      let truncationStart = imageBinary.indexOf('base64,');
      imageBinary = imageBinary.substring(truncationStart+7);
      let data = this.wallet.web3.utils.fromAscii(this.monData["name"] + "|" + this.monData["epithets"] + "|" + this.monData["lore"] + "|" + imageBinary);
      const func = this.contract.MON_REGISTRY.methods.uploadMon(data);
      this.wallet.sendTx(func, (hash)=> {
        this.registerIsStatic = this.uploadIsStatic;
        this.txHash = hash;
        this.register();
      }, () => {}, () => {});
    }
  }

  // Note this doesn't convert from ascii because it doesn't need it (txhash is already the right type for bytes)
  register() {
    if (this.enteredInTxHash != "") {
      this.txHash = this.enteredInTxHash;
    }
    let isStatic;
    if (this.registerIsStatic == "static") {
      isStatic = true;
    }
    else if (this.registerIsStatic == "anim") {
      isStatic = false;
    }
    else {
      return;
    }
    const func = this.contract.MON_REGISTRY.methods.registerMon(this.monId, this.txHash, isStatic);
    const feeAmt = this.registerFee.times(this.constants.PRECISION);
    this.wallet.sendTxWithToken(func, this.contract.XMON, this.constants.MON_REGISTRY_ADDRESS, feeAmt,
      200000, () => {
      }, () => {
      }, () => { });
  }

  async directUpload() {
    let imageURL;
    let isStatic;
    if (this.directIsStatic == "static") {
      imageURL = this.staticURL;
      isStatic = true;
    }
    else if (this.directIsStatic == "anim") {
      imageURL = this.animURL;
      isStatic = false;
    }
    else {
      return;
    }
    let response = await fetch(imageURL);
    let imgBlob = await response.blob();
    let reader = new FileReader();
    reader.readAsDataURL(imgBlob); 
    reader.onloadend = () => {
      let imageBinary = <string> reader.result;
      let truncationStart = imageBinary.indexOf('base64,');
      imageBinary = imageBinary.substring(truncationStart+7);
      let data = this.wallet.web3.utils.fromAscii(this.monData["name"] + "|" + this.monData["epithets"] + "|" + this.monData["lore"] + "|" + imageBinary);
      let gasLimit = Math.min(Math.ceil((data.length/4000)*2000000), 3500000);
      const func = this.contract.MON_REGISTRY.methods.registerMon(this.monId, data, isStatic);
      const feeAmt = this.registerFee.times(this.constants.PRECISION);
      this.wallet.sendTxWithToken(func, this.contract.XMON, this.constants.MON_REGISTRY_ADDRESS, feeAmt,
      gasLimit, () => {
      }, () => {
      }, () => { 
        alert("Error: likely gas required exceeds block gas limit!");
      });
    }
  }

  toggleShowRegister() {
    this.showRegister = !this.showRegister;
  }

  updateWidth(num) {
    this.width = this.width + num;
    window["width"] = this.width;
  }

  async claimCard() {
    const func = this.contract.PROTOCARDS.methods.mintCard(this.monId);
    await this.wallet.sendTxWithToken(func, this.contract.XMON, this.constants.PROTOCARDS_ADDRESS, this.constants.PROTOCARDS_ADDRESS, 350000, ()=>{}, ()=>{}, (e)=>{alert(e)});
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 
    this.navigate(event);
  }

  navigate(e) {
    if (e.key === "ArrowLeft") {
      this.router.navigate(["mon", this.prevId]);
    }
    if (e.key === "ArrowRight") {
      this.router.navigate(["mon", this.nextId]);
    }
  }
}
