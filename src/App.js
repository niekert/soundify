import React from 'react';
import { object } from 'prop-types';
import { Provider } from 'react-redux';
import AppContainer from 'containers/AppContainer';

function App({ store }) {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}

App.propTypes = {
  store: object.isRequired,
};

export default App;
