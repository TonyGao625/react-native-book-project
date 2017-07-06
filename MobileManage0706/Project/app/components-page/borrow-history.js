import React, { Component } from 'react';
import { View, StyleSheet,Button } from 'react-native';
import History from './../compponents-template/borrow-history'

export default class BookHistory extends Component {
  static navigationOptions = {
    tabBarLabel: '借阅记录'
  };
  render() {
    return (
        <History navigation={this.props.navigation}/>
    );
  }
}


