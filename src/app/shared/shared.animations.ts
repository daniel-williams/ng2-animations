import {
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
function getStates(num: number, state: (key: string) => any, trans: any): any[] {
  var states: any[] = [];
  for(var i = 0; i < num; i++) {
    states.push(state(i.toString()));
  }
  states.push(trans);
  return states;
}
function getRotationState(key: string): any {
  return state(key, style({ transform: 'rotate(' + getRandom(720 - 360) + 'deg)' }));
}

export const Animations = {
  rotate: trigger('rotate', getStates(10, getRotationState, transition('* => *', [ animate(500) ]))),
};