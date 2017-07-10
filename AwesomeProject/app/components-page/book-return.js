import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Return from './../compponents-template/book-return'
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class BookBorrow extends Component {
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
      <ScrollView>
        <Return navigation={this.props.navigation} />
      </ScrollView>
    );
  }
}