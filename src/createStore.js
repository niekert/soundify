import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { isDev } from 'helpers/env';
import rootReducer from './reducers';

export default () => {
  const devTool = window.__REDUX_DEVTOOLS_EXTENSION__;

  const middleware = applyMiddleware(
    thunkMiddleware,
  );

  return createStore(
    rootReducer,
    isDev && devTool && devTool(),
    middleware,
  );
};
