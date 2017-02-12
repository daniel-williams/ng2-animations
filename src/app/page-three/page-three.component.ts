import { Component, OnInit, AfterViewInit} from '@angular/core';

import {
  Easing,
  TimelineMax,
  ScrollMagic
} from '../../services';

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
    let slides = document.querySelectorAll('.section .slide');
    let timelines: any[] = [];

    // for(let i = 0; i < slides.length; i++) {
    //   let endMarker = document.createElement('div');
    //   endMarker.classList.add('end-marker');
    //   slides[i].appendChild(endMarker);
    // }

    for(let i = 0; i < slides.length; i++) {
      let title = slides[i].querySelector('.title');
      title.appendChild(document.createTextNode(`Title for Slide #${i+1}`))
      let icons = slides[i].querySelectorAll('.icons > .icon');

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
        triggerHook: 0.9
      })
      .setTween(timelines[i])
      .addTo(controller);
    }
  }
}