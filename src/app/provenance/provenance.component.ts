import { Component, OnInit } from '@angular/core';
import { ConstantsService } from '../constants.service';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-provenance',
  templateUrl: './provenance.component.html',
  styleUrls: ['./provenance.component.css']
})
export class ProvenanceComponent implements OnInit {

  allMonsList: any;
  monList: any;
  monOnChainList: any;
  selectedColor: any;
  selectedEncoding: any;
  colorList: any;

  constructor(public constants: ConstantsService, private apollo: Apollo) {
    this.selectedColor = "all";
    this.selectedEncoding = "all"
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

    this.apollo.query<any>({
      query: gql`
        {
          monsters(orderBy: number, first: 341) {
            number
            onChainStatic {
              isOnStorage
            }
            onChainAnimated {
              isOnStorage
            }
          }
        }
      `
    })
    .subscribe(
        ({ data, loading }) => {
          this.monOnChainList = data.monsters;
        }
    );
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

  filterMons() {
    this.monList = this.allMonsList
        .filter(m => this.selectedColor === 'all' || m.Color === this.selectedColor)
        .filter(m => this.hasRequiredEncoding(this.monOnChainList[m.Index]));
  }

  hasRequiredEncoding(onChainMonData) {
    switch (this.selectedEncoding) {
      case 'onchain':
        return onChainMonData.onChainStatic || onChainMonData.onChainAnimated;
      case 'offchain':
        return !(onChainMonData.onChainStatic || onChainMonData.onChainAnimated);
      case 'static':
        return onChainMonData.onChainStatic;
      case 'animated':
        return onChainMonData.onChainAnimated;
      case 'storage':
        return onChainMonData.onChainStatic && onChainMonData.onChainStatic.isOnStorage;
      case 'calldata':
        return (onChainMonData.onChainStatic && !onChainMonData.onChainStatic.isOnStorage)
            || (onChainMonData.onChainAnimated && !onChainMonData.onChainAnimated.isOnStorage);

      default:
        return true;
    }
  }
}
