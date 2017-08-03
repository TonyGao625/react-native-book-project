import React, { Component } from 'react';
import {AppRegistry,View,Text} from 'react-native';
import App from './app/app';
import Camera from 'react-native-camera';

export default class BookManagement extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('BookManagement', () => BookManagement);
