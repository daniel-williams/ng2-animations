import {
  Component,
  keyframes,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';

function getRandom(num: number): number {
  return Math.floor(Math.random() * num);
}

@Component({
  selector: 'sprite',
  styleUrls: ['./sprite.component.scss'],
  templateUrl: './sprite.component.html',
  animations: [
    trigger('transform', [
      state('0', style({ transform: 'rotate(' + getRandom(720 - 360) + 'deg) scale(' + getRandom(3) + ')' })),
      state('1', style({ transform: 'rotate(' + getRandom(720 - 360) + 'deg) scale(' + getRandom(3) + ')' })),
      state('2', style({ transform: 'rotate(' + getRandom(720 - 360) + 'deg) scale(' + getRandom(3) + ')' })),
      state('3', style({ transform: 'rotate(' + getRandom(720 - 360) + 'deg) scale(' + getRandom(3) + ')' })),
      state('4', style({ transform: 'rotate(' + getRandom(720 - 360) + 'deg) scale(' + getRandom(3) + ')' })),
      state('5', style({ transform: 'rotate(' + getRandom(720 - 360) + 'deg) scale(' + getRandom(3) + ')' })),
      state('6', style({ transform: 'rotate(' + getRandom(720 - 360) + 'deg) scale(' + getRandom(3) + ')' })),
      state('7', style({ transform: 'rotate(' + getRandom(720 - 360) + 'deg) scale(' + getRandom(3) + ')' })),
      state('8', style({ transform: 'rotate(' + getRandom(720 - 360) + 'deg) scale(' + getRandom(3) + ')' })),
      state('9', style({ transform: 'rotate(' + getRandom(720 - 360) + 'deg) scale(' + getRandom(3) + ')' })),
      transition('* => *', [ animate(500) ])
    ]),
    trigger('opacity', [
      state('0', style({ opacity: getRandom(10) * 0.1})),
      state('1', style({ opacity: getRandom(10) * 0.1})),
      state('2', style({ opacity: getRandom(10) * 0.1})),
      state('3', style({ opacity: getRandom(10) * 0.1})),
      state('4', style({ opacity: getRandom(10) * 0.1})),
      state('5', style({ opacity: getRandom(10) * 0.1})),
      state('6', style({ opacity: getRandom(10) * 0.1})),
      state('7', style({ opacity: getRandom(10) * 0.1})),
      state('8', style({ opacity: getRandom(10) * 0.1})),
      state('9', style({ opacity: getRandom(10) * 0.1})),
      transition('* => *', [ animate(500)])
    ]),
    trigger('color', [
      state('0', style({ backgroundColor: 'rgba(' + getRandom(255)+ ',' + getRandom(255) + ',' + getRandom(255) + ',1)' })),
      state('1', style({ backgroundColor: 'rgba(' + getRandom(255)+ ',' + getRandom(255) + ',' + getRandom(255) + ',1)' })),
      state('2', style({ backgroundColor: 'rgba(' + getRandom(255)+ ',' + getRandom(255) + ',' + getRandom(255) + ',1)' })),
      state('3', style({ backgroundColor: 'rgba(' + getRandom(255)+ ',' + getRandom(255) + ',' + getRandom(255) + ',1)' })),
      state('4', style({ backgroundColor: 'rgba(' + getRandom(255)+ ',' + getRandom(255) + ',' + getRandom(255) + ',1)' })),
      state('5', style({ backgroundColor: 'rgba(' + getRandom(255)+ ',' + getRandom(255) + ',' + getRandom(255) + ',1)' })),
      state('6', style({ backgroundColor: 'rgba(' + getRandom(255)+ ',' + getRandom(255) + ',' + getRandom(255) + ',1)' })),
      state('7', style({ backgroundColor: 'rgba(' + getRandom(255)+ ',' + getRandom(255) + ',' + getRandom(255) + ',1)' })),
      state('8', style({ backgroundColor: 'rgba(' + getRandom(255)+ ',' + getRandom(255) + ',' + getRandom(255) + ',1)' })),
      state('9', style({ backgroundColor: 'rgba(' + getRandom(255)+ ',' + getRandom(255) + ',' + getRandom(255) + ',1)' })),
      transition('* => *', [ animate(500)])
    ]),
    // trigger('scale', [
    //   state('0', style({ transform: 'scale(' + getRandom(3) + ')' })),
    //   state('1', style({ transform: 'scale(' + getRandom(3) + ')' })),
    //   state('2', style({ transform: 'scale(' + getRandom(3) + ')' })),
    //   state('3', style({ transform: 'scale(' + getRandom(3) + ')' })),
    //   state('4', style({ transform: 'scale(' + getRandom(3) + ')' })),
    //   state('5', style({ transform: 'scale(' + getRandom(3) + ')' })),
    //   state('6', style({ transform: 'scale(' + getRandom(3) + ')' })),
    //   state('7', style({ transform: 'scale(' + getRandom(3) + ')' })),
    //   state('8', style({ transform: 'scale(' + getRandom(3) + ')' })),
    //   state('9', style({ })),
    //   transition('* => *', [ animate(500)])
    // ])
  ]
})
export class Sprite {
  private transform: string;
  private transformCount: number;
  private color: string;
  private colorCount: number;
  private opacity: string;
  private opacityCount: number;
  // private scale: string;
  // private scaleCount: number;

  constructor() {
    this.transformCount = 0;
    this.colorCount = 0;
    this.opacityCount = 0;
    // this.scaleCount = 0;
    setInterval(this.updateRotation.bind(this), 500);
    setInterval(this.updateColor.bind(this), 500);
    setInterval(this.updateOpacity.bind(this), 500);
    // setInterval(this.updateScale.bind(this), 500);
  }

  updateRotation() {
    this.transform = '' + (this.transformCount + getRandom(5) % 10);
  }

  updateColor() {
    this.color = '' + (this.colorCount + getRandom(5) % 10);
  }

  updateOpacity() {
    this.opacity = '' + (this.opacityCount + getRandom(5) % 10);
  }

  // updateScale() {
  //   this.scale = '' + (this.scaleCount + getRandom(5) % 10);
  // }
}