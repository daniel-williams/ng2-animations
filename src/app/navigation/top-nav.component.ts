import {
  Component,
  HostListener
} from '@angular/core';

var gsap = require('gsap');
var TweenMax = gsap.TweenMax;
var TimelineMax = gsap.TimelineMax;
var Easing = require('EasePack');

var ScrollMagic = require('scrollmagic');
require('ScrollMagicGSAP');
require('ScrollToPlugin');

import {
  drawerStates,
  menuModes
} from './top-nav.constants';

@Component({
  selector: 'top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
})
export class TopNav {
  @HostListener('window:resize', ['$event'])
    onResize(event: any) {
      this.setNavModeAndState();
    }

  private menuMode: menuModes = menuModes.full;
  private drawerState: drawerStates = drawerStates.closed;

  private menuItems: any[] = [
    { link: '/one', text: 'One' },
    { link: '/two', text: 'Two' },
    { link: '/three', text: 'Three' },
    { link: '/four', text: 'Four' },
  ];

  constructor() {
    this.setNavModeAndState();
  }

  closeDrawer(event: UIEvent) {
    this.drawerState = drawerStates.closed;
    this.updateDrawerState();
  }

  toggleDrawerState(event: UIEvent) {
    this.drawerState = this.drawerState === drawerStates.opened
      ? drawerStates.closed
      : drawerStates.opened;
    this.updateDrawerState();
  }

  updateDrawerState(): void {
    let itemWrap = document.querySelector('.item-wrap-vert');

    if(itemWrap) {
      if(this.drawerState === drawerStates.opened) {
        TweenMax.to(itemWrap, .25, {
          width: '100%',
          ease: Easing.Power4.easeInOut
        });
      } else {
        TweenMax.to(itemWrap, .25, {
          width: '0',
          ease: Easing.Power4.easeOut
        });
      }
    }
  }

  setNavModeAndState() {
    if(window.innerWidth > 768) {
      this.drawerState = drawerStates.opened;
      this.menuMode = menuModes.full;
    } else {
      this.drawerState = drawerStates.closed;
      this.menuMode = menuModes.collapsed;
    }
    this.updateDrawerState();
  }

  getTopNavClasses(): string[] {
    return [this.menuMode.toString()];
  }

  onItemClick(event: UIEvent): void {
    if(this.menuMode === menuModes.collapsed) {
      this.drawerState = drawerStates.closed;
      this.updateDrawerState();
    }
  }

  showBurger(): boolean {
    return this.menuMode === menuModes.collapsed;
  }

  isFullMenu(): boolean {
    return this.menuMode === menuModes.full;
  }

  isCollapsedMenu(): boolean {
    return this.menuMode === menuModes.collapsed;
  }

}
