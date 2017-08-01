import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import BookList from './../compponents-template/book-borrow'
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class BookBorrow extends Component {
  static navigationOptions = {
    tabBarLabel: '借阅单',
    tabBarIcon: <Icon
      name="library-books"
      size={20}
      color='white' />,
    headerRight:
    <TouchableOpacity onPress={() => { navigation.navigate('Checkout'); }}
    >
      <Text style={{ color: "black", fontWeight: "bold", fontSize: 16, paddingRight: 10 }} >编辑</Text>
    </TouchableOpacity>
  };
  render() {
    return (
      <BookList navigation={this.props.navigation} />
    );
  }
}



