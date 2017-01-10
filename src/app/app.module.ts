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
import { TopNav } from './navigation';
import { Sprite } from './sprite';

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
    Sprite,
    TopNav
  ],
  providers: [
    NgRedux,
    NgReduxRouter
  ],
  bootstrap: [
    App
  ]
})
export class AppModule { }
