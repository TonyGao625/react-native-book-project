import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import BookAddDetail from './../compponents-template/book-add'

export default class BookAdd extends Component {
  static navigationOptions = {
    tabBarLabel: '全部',
  };
  render() {
    return (
        <BookAddDetail navigation={this.props.navigation}/>
    );
  }
}