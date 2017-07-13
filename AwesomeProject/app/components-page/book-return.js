import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Return from './../compponents-template/book-return'
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class BookBorrow extends Component {
 static navigationOptions = {
    tabBarLabel: '还书',
    tabBarIcon: <Icon 
        name="remove-shopping-cart" 
        size={20} 
        color='white' />
  };
  render() {
    return (
        <Return navigation={this.props.navigation} />
    );
  }
}