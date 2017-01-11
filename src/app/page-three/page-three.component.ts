import { Component, OnInit, AfterViewInit} from '@angular/core';

var gsap = require('gsap');
var Easing = require('EasePack');
var TweenMax = gsap.TweenMax;
var TimelineMax = gsap.TimelineMax;

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
    // console.log('ScrollMagic: ', ScrollMagic);
    // console.log('TweenMax: ', TweenMax);
    // console.log('TimelineMax: ', TimelineMax);
    // console.log('Easing: ', Easing);
  }

  ngAfterViewInit() {
    let controller = new ScrollMagic.Controller();
    let slides = document.querySelectorAll('.section > .slide');
    let timelines: any[] = [];

    for(let i = 0; i < slides.length; i++) {
      let endMarker = document.createElement('div');
      endMarker.classList.add('end-marker');
      slides[i].appendChild(endMarker);
    }

    for(let i = 0; i < slides.length; i++) {
      let title = slides[i].querySelector('.title');
      title.appendChild(document.createTextNode(`Title for Slide #${i+1}`))
      let icons = slides[i].querySelectorAll('.icons > .icon');
      console.log(icons);

      timelines[i] = new TimelineMax();
      timelines[i].from(title, .25, {
        marginLeft: 100,
        opacity: 0
      });
      timelines[i].staggerFrom(icons, .25, {
        opacity: 0,
        rotation:-180,
        ease: Easing.Power4.easeInOut
      }, .1, '-=.25');

      new ScrollMagic.Scene({
        triggerElement: slides[i],
      })
      .setTween(timelines[i])
      .addTo(controller);
    }
  }
}