
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Route from './route'
import store from './store';
import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';
export default class App extends Component {
  render() {
    console.disableYellowBox = true;
    return (
      <Provider store={store}>
        <Route />
      </Provider>
    );
  }
}


