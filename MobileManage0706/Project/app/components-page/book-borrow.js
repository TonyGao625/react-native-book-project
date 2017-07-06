import React, { Component } from 'react';
import { View, StyleSheet,Button } from 'react-native';
import Borrow from './../compponents-template/book-borrow'

export default class BookBorrow extends Component {
  static navigationOptions = {
    tabBarLabel: '已借阅'
  };
  render() {
    return (
        <Borrow navigation={this.props.navigation}/>
    );
  }
}


