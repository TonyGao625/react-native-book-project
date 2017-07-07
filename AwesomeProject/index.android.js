import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
//import App from './src/index';
import App from './app/app';


export default class AwesomeProject extends Component {
  render() {
    return (
      <App/>
    );
  }
}


AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
