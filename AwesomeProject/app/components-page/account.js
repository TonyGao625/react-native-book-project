import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Login from './../compponents-template/login'

export default class Account extends Component {
  render() {
    return (
        <Login navigation={this.props.navigation}/>
    );
  }
}


