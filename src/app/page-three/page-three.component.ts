import { Component } from '@angular/core';

var TweenMax = require('gsap');
var ScrollMagic = require('scrollmagic');
require('ScrollMagicGSAP');


@Component({
  selector: 'page-three',
  templateUrl: './page-three.component.html',
  styleUrls: ['./page-three.component.scss']
})
export class PageThree {

  constructor() {
  }

  ngOnInit() {
    console.log('TweenMax: ', TweenMax);
    console.log('ScrollMagic: ', ScrollMagic);
  }
}