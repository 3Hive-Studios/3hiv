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

  monColors: any;
  colors = [
    [204,0,0,0.9],
    [204,102,0,0.9],
    [204,204,0,0.9],
    [102,204,0,0.9],
    [0,204,0,0.9],
    [0,204,204,0.9],
    [0,102,204,0.9],
    [0,0,204,0.9],
    [102,0,204,0.9],
    [255,255,255,0.9]
  ];

  // Dragging flag
  isDrag: boolean;

  // Starting offsets
  startX: any;
  startY: any;
  offsetX: any;
  offsetY: any;

  // Total transformation
  totalOffsetX = 0;
  totalOffsetY = 0;

  // Total scale
  scale = 1;

  // Mouse coordinates
  mouseX: any;
  mouseY: any;

  // Currently highlighted circle
  currentX: any;
  currentY: any;
  selectedIndex: any;
  selectedImage: string;
  selectedName: string;

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
    this.monColors = monClusterData[2];
    this.drawDots();
    this.resetOffset();
  }

  drawDots() {
    window.requestAnimationFrame(() => {
      // Save current transformation, clear canvas, and then redraw
      this.ctx.save();
      this.ctx.setTransform(1, 0, 0, 1, 0, 0);
      this.ctx.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
      this.ctx.restore();
      for (let i = 0; i < this.monX.length; i++) {
        this.renderDot(this.scaleX(this.monX[i]), this.scaleY(this.monY[i]), this.getColor(this.monColors[i]));
      }
    });
  }

  scaleX(x) {
    return (x/4)+50;
  }

  scaleY(y) {
    return (y/4)+30;
  }

  renderDot(x,y, color) {
    this.ctx.beginPath();
    this.ctx.fillStyle = color;
    let radius = 6;
    this.ctx.arc(x, y, radius, 0, 2*Math.PI, true);
    this.ctx.fill();
  }

  handleDown(e) {
    this.isDrag = true;
    this.startX = parseInt(e.clientX - this.offsetX as any);
    this.startY = parseInt(e.clientY - this.offsetY as any);
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
      if (this.scale > 1) {
        dx = dx/this.scale;
        dy = dy/this.scale;
      }
      this.startX = this.mouseX;
      this.startY = this.mouseY;
      this.totalOffsetX += dx;
      this.totalOffsetY += dy;
      this.ctx.translate(dx, dy);
      this.drawDots();
    }
    this.checkForOverlap(e);
  }

  checkForOverlap(e) {
    this.startX = parseInt(e.clientX - this.offsetX as any);
    this.startY = parseInt(e.clientY - this.offsetY as any);
    let t = this.ctx.getTransform();
    let m = t["a"]*t["d"]-t["b"]*t["c"];
    let invT = {
      "a": t["d"]/m,
      "c": -t["c"]/m,
      "e": (t["c"]*t["f"]-t["d"]*t["e"])/m,
      "b": t["b"]/m,
      "d": t["a"]/m,
      "f": (t["b"]*t["e"]-t["a"]*t["f"])/m
    };
    let newX = invT["a"]*this.startX + invT["c"]*this.startY + invT["e"];
    let newY = invT["b"]*this.startX + invT["d"]*this.startY + invT["f"];
    // Find closest point
    let closestIndex = -1;
    let minDistance = 5;
    for (let i = 0; i < this.monX.length; i++) {
      let distance = Math.abs(newX-this.scaleX(this.monX[i])) + Math.abs(newY-this.scaleY(this.monY[i]));
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = i;
      }
    }
    this.selectedIndex = closestIndex;
    if (closestIndex !== -1) {
      window.requestAnimationFrame(() => {
        this.ctx.beginPath();
        this.ctx.fillStyle = 'rgba(40, 40, 40, 0.5)';
        this.ctx.arc(this.scaleX(this.monX[closestIndex]), this.scaleY(this.monY[closestIndex]), 2, 0, 2*Math.PI, true);
        this.ctx.fill();
      });
      if (this.localData.dataLoaded) {
        this.selectedImage = "../assets/final-sprites/" + this.localData.allMonData[this.selectedIndex]["Image"].replace("OPT", "STATIC");
        this.selectedName = this.localData.allMonData[this.selectedIndex]["Name"];
      }
    }
  }

  zoom(e) {
    // Prevent scrolling
    e.preventDefault();
    this.mouseX = parseInt(e.clientX - this.offsetX as any);
    this.mouseY = parseInt(e.clientY - this.offsetY as any);
    this.ctx.translate(this.mouseX, this.mouseY);
    let scale = e.deltaY < 0 ? 1.1 : 0.9;
    this.scale *= scale;
    this.ctx.scale(scale, scale);
    this.ctx.translate(-this.mouseX, -this.mouseY);
    this.drawDots();
  }

  getColor(i) {
    return "rgba(" + this.colors[i][0] + "," + this.colors[i][1] + "," + this.colors[i][2] + "," + this.colors[i][3] + ")";
  }
}
