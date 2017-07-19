import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import BookAdd from './../compponents-template/book-add'

export default class BookAddScreen extends Component {
  static navigationOptions = {
    tabBarLabel: '全部',
    headerTitle:'添加图书'
  };
  render() {
    return (
        <BookAdd navigation={this.props.navigation}/>
    );
  }
}