import React, { Component } from 'react';
import {View} from 'react-native';
import BookList from './../compponents-template/book-borrow/book-list'
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class BookBorrow extends Component {
  static navigationOptions = {
    tabBarLabel: '借阅车',
    tabBarIcon: <Icon
        name="local-grocery-store"
        size={20}
        color='white' />
  };
  render() {
    return (
      <BookList navigation={this.props.navigation} />
    );
  }
}



