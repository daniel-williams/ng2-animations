import { combineReducers } from 'redux';
import { routerReducer } from 'ng2-redux-router';

export interface IAppState {
};

export const rootReducer = combineReducers<IAppState>({
  router: routerReducer
});