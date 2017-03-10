import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from 'containers/AppContainer';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunkMiddleware from 'redux-thunk';
import './index.css';

ReactDOM.render(
  <Provider store={createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunkMiddleware))}
  >
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);
