import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import BookList from './../compponents-template/book-borrow'
import Icon from 'react-native-vector-icons/MaterialIcons';
import storage from 'store2';
import EditText from './../components-cell/book-edit.js'



export default class BookBorrow extends Component {
  static navigationOptions = {
    tabBarLabel: '借阅单',
    tabBarIcon: <Icon
      name="library-books"
      size={20}
      color='white' />,
    headerRight: <EditText />
  };
  render() {
    return (
      <BookList navigation={this.props.navigation} />
    );
  }
}



