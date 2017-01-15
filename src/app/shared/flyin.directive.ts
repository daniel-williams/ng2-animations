import { Directive, ElementRef, HostListener, Input } from '@angular/core';

import a from '../../services/animation.service';

@Directive({
  selector: '[flyIn]'
})
export class FlyInDirective {
  @Input('flyIn') duration: string;
  @Input() trigger: string;
  private controller: any;

  constructor(private el: ElementRef) {
    this.controller = new a.ScrollMagic.Controller();
  }

  ngOnInit() {
    let t = a.TweenMax.from(this.el.nativeElement, this.duration || 0.5, {
      marginLeft: '100%',
      opacity: 0.0,
      ease: a.Easing.Power4.easeInOut
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

    new a.ScrollMagic.Scene(s)
      .setTween(t)
      .addTo(this.controller);
  }
}
