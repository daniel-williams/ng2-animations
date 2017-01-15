import { Injectable } from '@angular/core';

var Gsap = require('gsap');
var TweenMax = Gsap.TweenMax;
var TimelineMax = Gsap.TimelineMax;
var Easing = require('EasePack');
require('ScrollToPlugin');

var ScrollMagic = require('scrollmagic');
require('ScrollMagicGSAP');

@Injectable()
export class AnimationService {
}

export default {
  Gsap,
  TweenMax,
  TimelineMax,
  Easing,
  ScrollMagic
}
