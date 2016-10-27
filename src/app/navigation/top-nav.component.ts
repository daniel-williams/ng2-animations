import {
  Component,
  ElementRef,
  HostListener,
  ViewChild,
  // animation
  keyframes,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';

import {
  menuStates,
  navModes
} from './top-nav.constants';

@Component({
  selector: 'top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
  animations: [
    trigger('burgerTrans', [
      state('collapsed', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        animate(150, keyframes([
          style({ transform: 'translateX(100%)', offset: 0 }),
          style({ transform: 'translateX(-15px)', offset: 0.8 })
        ]))
      ]),
      transition('* => void', [
        style({ display: 'none' })
      ])
    ]),
    trigger('menuItemsTrans', [
      state('opened', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        animate(150, keyframes([
          style({ transform: 'translateX(-100%)', offset: 0 }),
          style({ transform: 'translateX(15px)', offset: 0.8 })
        ]))
      ]),
      transition('* => void', [
        animate(150, keyframes([
          style({ transform: 'translateX(0)', offset: 0 }),
          style({ transform: 'translateX(15px)', offset: 0.4 }),
          style({ transform: 'translateX(-100%)', offset: 1.0 })
        ]))
      ])
    ])
  ]
})
export class TopNav {
  @HostListener('window:resize', ['$event'])
    onResize(event: any) {
      this.setNavState();
    }

  @ViewChild('toggle') toggle: ElementRef;
  @ViewChild('menu') menu: ElementRef;

  private navMode: navModes = navModes.full;
  private menuState: menuStates = menuStates.closed;

  private menuItems: any[] = [
    { link: '/page-one', text: 'Page One' },
    { link: '/page-two', text: 'Page Two' },
  ];
  private navItems: any[] = this.menuItems;

  constructor() {
    this.setNavState();
  }

  onToggle(event: UIEvent) {
    this.menuState = this.menuState === menuStates.opened
      ? menuStates.closed
      : menuStates.opened;
      this.updateMenuItems();
  }

  updateMenuItems() {
    if(this.menuState === menuStates.opened) {
      this.staggerAddItems();
    } else {
      this.staggerRemoveItems();
    }
  }

  setNavState() {
    if(window.innerWidth > 768) {
      if(this.navMode !== navModes.full) {
        this.AddItems();
        this.menuState = menuStates.opened;
      }
      this.navMode = navModes.full;
    } else {
      if(this.navMode !== navModes.collapsed) {
        this.RemoveItems();
        this.menuState = menuStates.closed;
      }
      this.navMode = navModes.collapsed;
    }
  }

  AddItems() {
    this.navItems = this.menuItems;
  }

  RemoveItems() {
    this.navItems = [];
  }

  staggerAddItems() {
    this.menuItems.forEach((item, x) => {
      setTimeout(() => this.navItems.push(item), x * 75);
    });
  }

  staggerRemoveItems() {
    for(var i = 0; i < this.navItems.length; i++) {
      setTimeout(() => {
        this.navItems.pop();
      }, i * 75);
    }
  }

  getNavClasses(): string[] {
    return [this.navMode.toString()];
  }

  showBurger(): boolean {
    return this.navMode === navModes.collapsed;
  }

  onItemClick(event: UIEvent): void {
    if(this.navMode === navModes.collapsed) {
      this.menuState = menuStates.closed;
      this.updateMenuItems();
    }
  }

  isNavFull(): boolean {
    return this.navMode === navModes.full;
  }

  isNavCollapsed(): boolean {
    return this.navMode === navModes.collapsed;
  }

}
