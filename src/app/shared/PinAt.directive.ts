import { Directive, ElementRef, HostListener, Input } from '@angular/core';

import {
  Easing,
  ScrollMagic,
  TweenMax
} from '../../services';

function getPosition(el: any) {
  let bodyRect = document.body.getBoundingClientRect();
  let elemRect = el.getBoundingClientRect();
  return { top: elemRect.top - bodyRect.top };
}

@Directive({
  selector: '[pinAt]'
})
export class PinAtDirective {
  private scene: any;
  private startMarker: Element;
  private endMarker: Element;
  private controller: any;

  private vpHeight: number;
  private elHeight: number;
  private hasOverflow: boolean;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.calculateHeights();
    this.setScene();
  }
  @Input('pinAt') pinAt: string;

  constructor(private el: ElementRef) {
    this.controller = new ScrollMagic.Controller();
    this.scene = new ScrollMagic.Scene().addTo(this.controller);

    this.startMarker = document.createElement('div');
    this.startMarker.classList.add('start-');
    this.endMarker = document.createElement('div');
    this.endMarker.classList.add('end-');
  }

  ngOnInit() {
    this.el.nativeElement.appendChild(this.endMarker);
    this.el.nativeElement.insertBefore(this.startMarker, this.el.nativeElement.children[0]);

    this.calculateHeights();
    this.setScene();
  }

  private calculateHeights(): void {
    this.vpHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    this.elHeight = this.el.nativeElement.getBoundingClientRect().height;
    this.hasOverflow = this.elHeight > this.vpHeight;
  }

  private setScene(): void {
    let slide = this.el.nativeElement.querySelector('.slide');

    let slideBox = slide.getBoundingClientRect();
    let startOffset = slideBox.top;
    let endOffset = slideBox.top + slideBox.height - Math.min(slideBox.height, this.vpHeight);

    let offset = this.hasOverflow
      ? endOffset
      : startOffset;

    this.scene
      .offset(offset)
      .setPin(slide)
      .duration(0)
      .refresh();
  }
}
