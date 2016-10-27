import { Component } from '@angular/core';
import {
  DevToolsExtension,
  NgRedux
} from 'ng2-redux';
import { NgReduxRouter } from 'ng2-redux-router';
const createLogger = require('redux-logger');

import '../../client/content/styles/app.scss';
import {
  IAppState,
  rootReducer
} from '../store';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class App {
  constructor(
    private ngRedux: NgRedux<IAppState>,
    private ngReduxRouter: NgReduxRouter,
    private devTool: DevToolsExtension
  ) {
    this.ngRedux.configureStore(
      rootReducer,
      {},
      [createLogger()],
      [devTool.isEnabled() ? devTool.enhancer() : f => f]);
    this.ngReduxRouter.initialize();
  }
}
