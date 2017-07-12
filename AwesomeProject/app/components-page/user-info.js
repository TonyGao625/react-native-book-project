import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import UserDeatil from './../compponents-template/user-info'
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class UserInfo extends Component {
  static navigationOptions = {
    tabBarLabel: '我的',
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name="person"
        size={20}
        style={[{ tintColor: tintColor }]}
        color='white' />
    ),
  };
  render() {
    return (
      <UserDeatil navigation={this.props.navigation} />
    );
  }
}