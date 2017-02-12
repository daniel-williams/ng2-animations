import { Directive, ElementRef, HostListener, Input } from '@angular/core';

import {
  Easing,
  ScrollMagic,
  TweenMax
} from '../../services';

@Directive({
  selector: '[flyIn]'
})
export class FlyInDirective {
  private controller: any;

  @Input('flyIn') duration: string;
  @Input() trigger: string;

  constructor(private el: ElementRef) {
    this.controller = new ScrollMagic.Controller();
  }

  ngOnInit() {
    let t = TweenMax.from(this.el.nativeElement, this.duration || 0.5, {
      marginLeft: '100%',
      opacity: 0.0,
      ease: Easing.Power4.easeInOut
    });

    let s: any = {
      triggerElement: this.el.nativeElement,
    };
    if(this.trigger) {
      let triggerNum = Number.parseFloat(this.trigger);
      s.triggerHook = typeof triggerNum === 'number'
        ? triggerNum
        : this.trigger;
    }

    new ScrollMagic.Scene(s)
      .setTween(t)
      .addTo(this.controller);
  }
}
