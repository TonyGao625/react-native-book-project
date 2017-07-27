import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import Return from './../compponents-template/book-return'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Badge } from 'antd-mobile';

export default class BookBorrow extends Component {
 static navigationOptions = {
    tabBarLabel: '还书',
    tabBarIcon: <Badge dot>
                  <Icon 
                    name="assignment-return" 
                    size={20} 
                    color='white' />
                </Badge> 
  };
  render() {
    return (
        <Return navigation={this.props.navigation} />
    );
  }
}