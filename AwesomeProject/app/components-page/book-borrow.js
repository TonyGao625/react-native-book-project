import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Borrow from './../compponents-template/book-borrow'
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class BookBorrow extends Component {
  static navigationOptions = {
    tabBarLabel: '借阅',
    tabBarIcon: ({ tintColor }) => (
      <Icon 
        name="local-grocery-store" 
        size={20} 
        style={[{tintColor: tintColor}]}
        color='white' />
    ),
  };
  render() {
    return (
      <ScrollView>
        <Borrow navigation={this.props.navigation}/>
      </ScrollView>
    );
  }
}


