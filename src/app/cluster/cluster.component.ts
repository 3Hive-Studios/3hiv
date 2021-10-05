import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { LocalDataService } from '../localData.service';
let pixels = require('image-pixels')

@Component({
  selector: 'app-cluster',
  templateUrl: './cluster.component.html',
  styleUrls: ['./cluster.component.css']
})
export class ClusterComponent implements OnInit {

  loadingPercentage = 0;

  startingColors = 12;
  maxColors = 16;
  defaultColors = [
    "#ff0000", 	
    "#ff8000", 	
    "#ffff00", 	
    "#80ff00", 	
    "#a9a9a9", 	
    "#dcbeff", 	
    "#3cb44b", 	
    "#0095ff", 	
    "#0000ff", 	
    "#8000ff", 	
    "#ffffff", 	
    "#000000"
  ];
  rainbowColors = ['#e6194B', '#3cb44b', '#ffe119', '#4363d8', '#f58231', '#911eb4', '#42d4f4', '#f032e6', '#bfef45', '#fabed4', '#469990', '#dcbeff', '#9A6324', '#fffac8', '#800000', '#aaffc3', '#808000', '#ffd8b1', '#000075', '#a9a9a9', '#ffffff', '#000000'];
  colorList = this.fb.array([]);
  colorRGB = [];

  allMonsLoaded: boolean;
  monImageArray = [];
  knnMonImageArray = [];

  constructor(private fb: FormBuilder, public localData: LocalDataService) { 
    for (let i = 0; i < this.startingColors; i++) {
      this.colorList.push(
        this.fb.group({
          color: [this.defaultColors[i]]
        })
      );
    }
  }

  ngOnInit(): void {
    this.localData.dataLoadedEvent.subscribe(() => {
      this.loadMonImages();
    });
  }

  addColor() {
    if (this.colorList.length < this.maxColors) {
      this.colorList.push(
        this.fb.group({
          color: ['']
        })
      );
    }
  }

  deleteColor(i) {
    this.colorList.removeAt(i);
  }

  async loadMonImages() {
    const toMatrix = (arr, width) => 
    arr.reduce((rows, key, index) => (index % width == 0 ? rows.push([key]) 
      : rows[rows.length-1].push(key)) && rows, []);
    // for (let d of this.localData.allMonData) {
    let max = 10;
    for (let i = 0; i < max; i++) {
      let d = this.localData.allMonData[i];
      let img = d["Image"].replace("OPT", "STATIC");
      let {data, width, height} = await pixels('./assets/final-sprites/' + img);
      this.monImageArray.push(
        toMatrix(data, 4)
      );
      this.loadingPercentage = 100*(i+1)/max;
    }
    this.allMonsLoaded = true;
  }

  hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [
      parseInt(result[1], 16),
      parseInt(result[2], 16),
      parseInt(result[3], 16)
   ] : null;
  }

  // Assumes image is a list of [r,g,b,a] values
  // colors is a list of [r,g,b] values
  // Returns a list of indices for the closest color
  knnImage(image, colors) {
    let reducedImage = [];
    for (let i of image) {
      let closestColorIndex = 0;
      let minDiff = 3*255*255;
      // Go through all colors and take the L2 norm
      // Find the closest one
      for (let colorIndex = 0; colorIndex < colors.length; i++) {
        let diff = ((i[0]-this.colorRGB[colorIndex][0])*(i[0]-this.colorRGB[colorIndex][0])
        + (i[1]-this.colorRGB[colorIndex][1])*(i[1]-this.colorRGB[colorIndex][1])
        + (i[2]-this.colorRGB[colorIndex][2])*(i[2]-this.colorRGB[colorIndex][2]));
        if (diff < minDiff) {
          minDiff = diff;
          closestColorIndex = colorIndex;
        }
      }
      reducedImage.push(closestColorIndex);
    }
    return reducedImage;
  }

  // TODO: just make analyze unclickable until all mons loaded
  analyze() {
    this.colorRGB = [];
    for (let i = 0; i < this.colorList.length; i++) {
      let color = (this.colorList.at(i) as any).controls.color.value;
      this.colorRGB.push(this.hexToRgb(color));
    }
    if (this.allMonsLoaded) {
      this.knnMonImageArray = [];
      for (let m of this.monImageArray) {
        this.knnMonImageArray.push(this.knnImage(m, this.colorRGB))
      }
      console.log(this.knnMonImageArray);
    }
    else {
      alert("Not fully loaded!");
      return;
    }
  }



}
