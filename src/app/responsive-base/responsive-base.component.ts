import { Component } from '@angular/core';

let BASE_WIDTH = 1200;

@Component({
  templateUrl: './responsive-base.component.html'
})
export class ResponsiveBase {
  sizeRelative: number = 1;

  constructor() {
    this.calculatesizeRelative();
  }

  calculatesizeRelative(): void {
    this.sizeRelative = window.innerWidth / BASE_WIDTH;
  }

  onResize(evt: any) {
    this.calculatesizeRelative();
  }
}
