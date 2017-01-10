import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger
} from '@angular/core';

export class AnimationFactory {

  static getFadeInOutAnimation() {
    return trigger('fadeInOut', [
      state('in', style({ opacity: 1.0 })),
      state('out', style({ opacity: 0.0 })),
      transition('out => in', animate('100ms ease-in')),
      transition('in => out', animate('100ms ease-out')),
    ]);
  }

}
