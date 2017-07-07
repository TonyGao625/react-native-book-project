import React, { Component } from 'react';
import { View, StyleSheet,Button } from 'react-native';
import BookList from './../compponents-template/book-all'

export default class BookAll extends Component {
    static navigationOptions = {
    tabBarLabel: '全部',
  };
  render() {
    return (
        <BookList navigation={this.props.navigation}/>
    );
  }
}


