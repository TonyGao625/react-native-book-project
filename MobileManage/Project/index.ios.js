import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
//import App from './src/index';
import App from './app/app';


export default class Project extends Component {
  render() {
    return (
      <App/>
    );
  }
}

AppRegistry.registerComponent('Project', () => Project);
