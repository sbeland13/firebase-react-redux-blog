import React from 'react';
import { Provider } from 'react-redux';

import store from '../store';

import App from '../components/App';

class Root extends React.Component {
  render()  {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default Root;
