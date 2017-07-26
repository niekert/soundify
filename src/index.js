import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer as HotModuleAppContainer } from 'react-hot-loader';
import App from './App';
import createStore from './createStore';
import './index.css';

const store = createStore();

ReactDOM.render(
  <HotModuleAppContainer>
    <App store={store} />
  </HotModuleAppContainer>,
  document.getElementById('root'),
);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default; // eslint-disable-line

    ReactDOM.render(
      <HotModuleAppContainer>
        <NextApp store={store} />
      </HotModuleAppContainer>,
      document.getElementById('root'),
    );
  });
}
