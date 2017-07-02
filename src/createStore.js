import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import persistState from 'redux-localstorage';
import { isDev } from 'helpers/env';
import rootReducer from './reducers';

const localStorageSlicer = paths => state => ({
  settings: state.settings,
  data: {
    player: {
      ...state.data.player,
      isPlaying: false,
      trackHistory: [],
    },
  },
});

export default () => {
  const devTool = window.__REDUX_DEVTOOLS_EXTENSION__;

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const enhancer = composeEnhancers(
    applyMiddleware(thunkMiddleware, promiseMiddleware),
    persistState('', {
      slicer: localStorageSlicer,
    }),
  );

  return createStore(rootReducer, enhancer);
};
