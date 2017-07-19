import React, { Component } from 'react';
import { View, StyleSheet,Button } from 'react-native';
import Collection from './../compponents-template/book-collection'
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class BookHistory extends Component {
  static navigationOptions = {
    tabBarLabel: '收藏',
    tabBarIcon: <Icon 
        name="favorite" 
        size={20} 
        color='white' />,
  };
  render() {
    return (
        <Collection navigation={this.props.navigation}/>
    );
  }
}


