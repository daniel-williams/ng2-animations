import { Directive, ElementRef, HostListener, Input } from '@angular/core';

var gsap = require('gsap');
var Easing = require('EasePack');
var TweenMax = gsap.TweenMax;
var TimelineMax = gsap.TimelineMax;

var ScrollMagic = require('scrollmagic');
require('ScrollMagicGSAP');

@Directive({
  selector: '[flyIn]'
})
export class FlyInDirective {

  private controller: any;

  constructor(private el: ElementRef) {
    this.controller = new ScrollMagic.Controller();
    let t = TweenMax.from(this.el.nativeElement, .5, {
      marginLeft: '100%',
      opacity: 0.0,
      ease: Easing.Power3.easeInOut
    })

    new ScrollMagic.Scene({
        triggerElement: this.el.nativeElement,
      })
      .setTween(t)
      .addTo(this.controller);
  }

  // @Input('flyIn') flyInInput: string;

  // @HostListener('mouseenter') onMouseEnter() {
  //   this.highlight(this.highlightColor || this.defaultColor || 'red');
  // }

  // @HostListener('mouseleave') onMouseLeave() {
  //   this.highlight(null);
  // }

}