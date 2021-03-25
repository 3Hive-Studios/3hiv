import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HostListener } from '@angular/core';
import { ConstantsService } from '../constants.service';
import { ContractService } from '../contract.service';
import { UtilsService } from '../utils.service';
import { WalletService } from '../wallet.service';

@Component({
  selector: 'app-old-mons',
  templateUrl: './old-mons.component.html',
  styleUrls: ['./old-mons.component.css']
})
export class OldMonsComponent implements OnInit {

  constructor(public wallet: WalletService, public contract: ContractService, public constants: ConstantsService, private utils: UtilsService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.resetData();
  }

  monId: string;
  monData: any;
  width: any;
  minWidth: any;
  maxWidth: any;

  prevId: any;
  nextId: any;
  hidePrev: boolean;
  hideNext: boolean;

  superStatic: string;

  resetData() {
    this.monData = {};
    this.width = 14;
    this.minWidth = 1;
    this.maxWidth = 30;
    this.monId = "0";
    this.superStatic = "";
  }

  ngOnInit(): void {
    this.hidePrev = true;
    this.hideNext = true;
    this.loadLocalData();

    this.monId = this.activatedRoute.snapshot.paramMap.get('id');
    this.updatePrevNextIds();

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
      this.monId = routeParams.id;
      this.updatePrevNextIds();
      this.loadLocalData();
      if (this.wallet.connected) {
        this.loadData();
      }
    });
  }

  updatePrevNextIds() {
    this.prevId = parseInt(this.monId)-1;
    this.nextId = parseInt(this.monId)+1;
  }

  async loadData() {
    this.updatePrevNextIds();
  }

  async loadLocalData() {
    const response = await fetch(this.constants.OLD_MON_DATA);
    const fullResponseObj = await response.json();
    const responseObj = fullResponseObj[this.monId];
    this.monData["name"] = responseObj["name"];
    this.monData["img"] = this.constants.S3_URL + responseObj["img"];
    this.monData["parent1Id"] = responseObj["parent1"];
    this.monData["parent2Id"] = responseObj["parent2"];
  }

  updateWidth(num) {
    this.width = this.width + num;
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 
    this.navigate(event);
  }

  navigate(e) {
    if (e.key === "ArrowLeft") {
      this.router.navigate(["old-mon", this.prevId]);
    }
    if (e.key === "ArrowRight") {
      this.router.navigate(["old-mon", this.nextId]);
    }
    this.loadLocalData();
  }
}
