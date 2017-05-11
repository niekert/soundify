import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import { isDev } from 'helpers/env';
import rootReducer from './reducers';

export default () => {
  const devTool = window.__REDUX_DEVTOOLS_EXTENSION__;

  const middleware = applyMiddleware(thunkMiddleware, promiseMiddleware);

  return createStore(rootReducer, isDev && devTool && devTool(), middleware);
};
