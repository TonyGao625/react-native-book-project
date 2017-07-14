import React, { Component } from 'react';
import {AppRegistry,View,Text} from 'react-native';
import App from './app/app';

export default class AwesomeProject extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
