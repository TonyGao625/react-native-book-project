
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Main from './components-page/main'
import Menu from './components-page/menu'
import store from './store';

export default class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <Menu/>
        </Provider>
      );
  }
}


