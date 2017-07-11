import React, { Component } from 'react';
import {AppRegistry,View,Text} from 'react-native';
//import App from './src/index';
import App from './app/app';

import {CoordinatorLayout, BottomSheetBehavior, FloatingActionButton} from 'react-native-bottom-sheet-behavior'


export default class AwesomeProject extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
