import React, { Component } from 'react';
import {View} from 'react-native';
import BookList from './../compponents-template/book-borrow/book-list'
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class BookBorrow extends Component {
  static navigationOptions = {
    tabBarLabel: '借阅车',
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name="local-grocery-store"
        size={20}
        style={[{ tintColor: tintColor }]}
        color='white' />
    ),
    headerRight: (
       <Icon name="person" size={40} color='red' />
    )
  };
  render() {
    return (
      <BookList navigation={this.props.navigation} />
    );
  }
}



