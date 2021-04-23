import { Component, OnInit } from '@angular/core';
import { ConstantsService } from '../constants.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  monList: any;
  mon: any;
  showImage: boolean;

  constructor(public constants: ConstantsService) {
    this.mon = {};
    this.showImage = true;
   }

  ngOnInit(): void {
    this.loadData();
  }

  async loadData() {
    const response = await fetch(this.constants.LOCAL_MON_DATA);
    const fullResponseObj = await response.json();
    for (let response of fullResponseObj) {
      response["imageURL"] = this.constants.IMAGE_PATH + response["Image"];
    }
    this.monList = fullResponseObj;
    this.loadRandomMon();
  }

  flip() {
    this.showImage = !this.showImage;
  }

  loadRandomMon() {
    let index = Math.floor(Math.random()*this.monList.length);
    this.mon = this.monList[index];
    this.showImage = true;
  }
}
