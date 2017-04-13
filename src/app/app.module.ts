import { BrowserModule }  from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { NgReduxModule } from 'ng2-redux';
import { NgReduxRouter } from 'ng2-redux-router';
import { RouterModule } from '@angular/router';

import { AppRouterModule } from './app-router.module';

import { App } from './app.component';
import { Footer } from './footer';
import { Header } from './header';
import { PageOne } from './page-one';
import { PageTwo } from './page-two';
import { PageThree } from './page-three';
import { PageFour, ChildTest } from './page-four';
import { TopNav } from './navigation';
import { Sprite } from './sprite';

import {
  Ellipsis,
  FlyInDirective,
  PinAtDirective,
  ParlaxBillboard,
  SortTable,
} from './shared';

import { AnimationService } from '../services';

@NgModule({
  imports: [
    BrowserModule,
    NgReduxModule,
    AppRouterModule
  ],
  declarations: [
    App,
    Footer,
    Header,
    PageOne,
    PageTwo,
    PageThree,
    PageFour,
    ChildTest,
    Sprite,
    TopNav,

    Ellipsis,
    FlyInDirective,
    PinAtDirective,
    ParlaxBillboard,
    SortTable
  ],
  providers: [
    NgRedux,
    NgReduxRouter,

    AnimationService
  ],
  bootstrap: [
    App
  ]
})
export class AppModule { }
