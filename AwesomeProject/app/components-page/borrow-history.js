import React, { Component } from 'react';
import { View, StyleSheet,Button } from 'react-native';
import History from './../compponents-template/borrow-history'
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class BookHistory extends Component {
  static navigationOptions = {
    tabBarLabel: '还书',
    tabBarIcon: ({ tintColor }) => (
      <Icon 
        name="remove-shopping-cart" 
        size={20} 
        style={[{tintColor: tintColor}]}
        color='white' />
    ),
  };
  render() {
    return (
        <History navigation={this.props.navigation}/>
    );
  }
}


