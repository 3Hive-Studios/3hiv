import { Component, OnInit, ViewChild, ElementRef, AfterViewInit , HostListener} from '@angular/core';
import { LocalDataService } from '../localData.service';

@Component({
  selector: 'app-cluster',
  templateUrl: './cluster.component.html',
  styleUrls: ['./cluster.component.css']
})
export class ClusterComponent implements OnInit {
  
  @ViewChild('canvas')
  canvas: ElementRef<HTMLCanvasElement>;
  public ctx: CanvasRenderingContext2D;

  // Array of x/y values to show on canvas
  monX: any;
  monY: any;

  // Dragging flag
  isDrag: boolean;

  // Starting offsets
  startX: any;
  startY: any;
  offsetX: any;
  offsetY: any;

  // Total x/y offsets
  totalOffsetX = 0;
  totalOffsetY = 0;

  // Zoom scale
  scale = 1;

  // Mouse coordinates
  mouseX: any;
  mouseY: any;

  constructor(public localData: LocalDataService) { 
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.loadData();
  }

  resetOffset() {
    let boundingBox = this.canvas.nativeElement.getBoundingClientRect();
    this.offsetX = boundingBox.left;
    this.offsetY = boundingBox.top;
  }

  @HostListener("window:scroll", []) onWindowScroll() {
    this.resetOffset();
  }

  async loadData() {
    let monClusterData = (await (await fetch('../assets/monCluster6.json')).json());
    this.monX = monClusterData[0];
    this.monY = monClusterData[1];
    this.drawDots();
    this.resetOffset();
  }

  drawDots() {
    let canvasW = this.canvas.nativeElement.width * this.scale;
    let canvasH = this.canvas.nativeElement.height * this.scale;
    this.ctx.clearRect(0, 0, canvasW, canvasH);
    for (let i = 0; i < this.monX.length; i++) {
      this.renderDot(this.scaleX(this.monX[i]), this.scaleY(this.monY[i]));
    }
  }

  scaleX(x) {
    return (x/4)+50;
  }

  scaleY(y) {
    return (y/4)+30;
  }

  renderDot(x,y) {
    this.ctx.beginPath();
    this.ctx.fillStyle = 'rgba(240, 240, 240, 0.5)';
    let radius = 5;
    this.ctx.arc(x+this.totalOffsetX, y+this.totalOffsetY, radius, 0, 2*Math.PI, true);
    this.ctx.fill();
  }

  handleDown(e) {
    this.isDrag = true;
    this.startX = parseInt(e.clientX - this.offsetX as any);
    this.startY = parseInt(e.clientY - this.offsetY as any);

    this.mouseX = parseInt(e.clientX - this.offsetX as any);
    this.mouseY = parseInt(e.clientY - this.offsetY as any);
    let closestIndex = -1;
    let minDiff = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < this.monX.length; i++) {
      let diff = Math.abs(this.monX[i]-this.mouseX)+Math.abs(this.monY[i]-this.mouseY);
      if (diff < minDiff) {
        minDiff = diff;
        closestIndex = i;
      }
    }
    // TODO: scale mouse coordinates with drag
    console.log(this.mouseX, this.mouseY);
  }

  endDrag(e) {
    this.isDrag = false;
  }

  handleMove(e) {
    // handle drag
    this.mouseX = parseInt(e.clientX - this.offsetX as any);
    this.mouseY = parseInt(e.clientY - this.offsetY as any);
    if (this.isDrag) {
      let dx = this.mouseX - this.startX;
      let dy = this.mouseY - this.startY;
      this.startX = this.mouseX;
      this.startY = this.mouseY;
      this.totalOffsetX += dx;
      this.totalOffsetY += dy;
      this.drawDots();
    }
    else {
    }
  }

  zoom(e) {
    let deltaY = e.deltaY;
    let contentHeight = this.canvas.nativeElement.scrollHeight;
    let visibleHeight = this.canvas.nativeElement.offsetHeight;
    let scrollTop = this.canvas.nativeElement.scrollTop;
    if (scrollTop === 0 && deltaY < 0) {
      e.preventDefault();
    }
    else if (visibleHeight + scrollTop === contentHeight && deltaY > 0) {
      e.preventDefault();
    }
    window.requestAnimationFrame(() => {
      let scale, invScale;
      if (e.deltaY < 0) {
        scale = 1.12;
        invScale = 0.9;
        this.ctx.scale(scale, scale);
      }
      else {
        scale = 0.9;
        invScale = 1.12;
        this.ctx.scale(scale, scale);
      }
      // Scale up as we zoom in
      this.scale = invScale * this.scale;
      this.drawDots();
    });
  }
}
