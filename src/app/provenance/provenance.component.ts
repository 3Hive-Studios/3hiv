import { Component, OnInit } from '@angular/core';
import { ConstantsService } from '../constants.service';

@Component({
  selector: 'app-provenance',
  templateUrl: './provenance.component.html',
  styleUrls: ['./provenance.component.css']
})
export class ProvenanceComponent implements OnInit {

  allMonsList: any;
  monList: any;
  selectedColor: any;
  colorList: any;

  constructor(public constants: ConstantsService) {
    this.selectedColor = "all";
    this.colorList = [
      'all',
      'blue',
      'brown',
      'combo',
      'gray',
      'green',
      'purple',
      'rainbow',
      'red',
      'white',
      'yellow'
    ];
   }

  ngOnInit(): void {
    this.loadData();
  }

  async loadData() {
    const response = await fetch(this.constants.LOCAL_MON_DATA);
    const fullResponseObj = await response.json();
    for (let response of fullResponseObj) {
      let path = response["Image"].replace("OPT", "STATIC")
      response["StaticURL"] = this.constants.IMAGE_PATH + path;
    }
    this.monList = fullResponseObj;
    this.allMonsList = JSON.parse(JSON.stringify(fullResponseObj));
  }

  filterMonsByColor() {
    this.monList = this.allMonsList.filter(m => m.Color === this.selectedColor);
  }

}
