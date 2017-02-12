import { Component, ElementRef, Input, ViewChild } from '@angular/core';

import {
  Easing,
  ScrollMagic
} from '../../../services';

@Component({
  selector: 'parlax-billboard',
  templateUrl: './parlax-billboard.component.html',
  styleUrls: ['./parlax-billboard.component.scss']
})
export class ParlaxBillboard {
  private controller: any;

  @Input('src') src: string;
  @Input('height') height: number;

  @ViewChild('parlax') parlaxRef: ElementRef;
  @ViewChild('parlaxBg') parlaxBgRef: ElementRef;

  constructor() {
    this.controller = new ScrollMagic.Controller({
      globalSceneOptions: {
        triggerHook: "onEnter",
        duration: "200%"
      }
    });
  }

  ngOnInit() {
    let parlax = this.parlaxRef.nativeElement;
    let parlaxBg = this.parlaxBgRef.nativeElement;

    if(parlax) {
      new ScrollMagic.Scene({triggerElement: parlax})
        .setTween(parlaxBg, {
          y: '80%',
          ease: Easing.Linear.easeNone
        })
        .addTo(this.controller);
    }
  }

  private _parlaxStyle: any;
  get parlaxStyle() {
    if(!this._parlaxStyle) {
      this._parlaxStyle = {
        height: this.height || '100%'
      };
    }
    return this._parlaxStyle;
  }

  private _parlaxBgStyle: any;
  get parlaxBgStyle() {
    if(!this._parlaxBgStyle) {
      this._parlaxBgStyle = {
        backgroundImage: this.src || 'none'
      };
    }
    return this._parlaxBgStyle;
  }
}