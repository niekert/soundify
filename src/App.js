import React from 'react';
import { Provider } from 'react-redux';
import AppContainer from 'containers/AppContainer';

function App({ store }) {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}
export default App;
