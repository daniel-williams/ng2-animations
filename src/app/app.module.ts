import { BrowserModule }  from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { NgReduxModule } from 'ng2-redux';
import { NgReduxRouter } from 'ng2-redux-router';
import { RouterModule } from '@angular/router';

import routes from '../routes';
import { App } from './app.component';
import { Footer } from './footer';
import { Header } from './header';
import { PageOne } from './page-one';
import { PageTwo } from './page-two';
import { TopNav } from './navigation';

@NgModule({
  imports: [
    BrowserModule,
    NgReduxModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    App,
    Footer,
    Header,
    PageOne,
    PageTwo,
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
