import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import persistState from 'redux-localstorage';
import { isDev } from 'helpers/env';
import rootReducer from './reducers';

const localStorageSlicer = () => state => ({
  data: {
    settings: state.data.settings,
    player: {
      ...state.data.player,
      isPlaying: false,
      trackHistory: [],
      prevTracksHistory: [],
    },
  },
});

export default () => {
  const composeEnhancers =
    (isDev() && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

  const enhancer = composeEnhancers(
    applyMiddleware(thunkMiddleware, promiseMiddleware),
    persistState('', {
      slicer: localStorageSlicer,
    }),
  );

  return createStore(rootReducer, enhancer);
};
