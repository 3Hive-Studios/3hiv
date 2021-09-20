import { Injectable, EventEmitter } from '@angular/core';
import { ConstantsService } from './constants.service';

@Injectable({
  providedIn: 'root'
})
export class LocalDataService {

  allMonData: any;
  allSounds: any;
  dataLoaded: boolean;
  dataLoadedEvent: EventEmitter<null>;

  constructor(public constants: ConstantsService) {
    this.dataLoadedEvent = new EventEmitter<null>();
    this.loadData();
  }

  async loadData() {
    const response = await fetch(this.constants.LOCAL_MON_DATA);
    const fullResponseObj = await response.json();
    this.allMonData = fullResponseObj;
    const metadata = await fetch(this.constants.SOUNDSCAPES_ARWEAVE_PATH);
    this.allSounds = await metadata.json();
    this.dataLoaded = true;
    this.dataLoadedEvent.emit();
  }
}
