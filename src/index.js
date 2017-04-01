import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from 'containers/AppContainer';
import { Provider } from 'react-redux';
import createStore from './createStore';
import './index.css';

const store = createStore();

// TODO: move store to own file
ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root'),
);
