import { Component, OnInit } from '@angular/core';
import { ConstantsService } from '../constants.service';

@Component({
  selector: 'app-provenance',
  templateUrl: './provenance.component.html',
  styleUrls: ['./provenance.component.css']
})
export class ProvenanceComponent implements OnInit {

  monList: any;

  constructor(public constants: ConstantsService) { }

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
  }

}
