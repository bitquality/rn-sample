import React, { Component } from 'react';
import { Provider } from 'react-redux'
import configureStore from './src/store/configureStore'

import AppNavigator from './src/components/shared/appNavigator';

const store = configureStore();

class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <AppNavigator />
       </Provider>
    )
  }
}
export default App;
