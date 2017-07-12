import React, { Component } from 'react';
import { View, StyleSheet, AsyncStorage } from 'react-native';
import UserDeatil from './../compponents-template/user-info'
import Icon from 'react-native-vector-icons/MaterialIcons';
import UserLogout from './../components-smart/user-logout'

export default class UserInfo extends Component {
  static navigationOptions  = ({ navigation }) =>({
    tabBarLabel: '我的',
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name="person"
        size={20}
        style={[{ tintColor: tintColor }]}
        color='white' />
    ),
    headerRight: (
      <UserLogout navigation={navigation}/>)
  });
  render() {
    return (
      <UserDeatil navigation={this.props.navigation} />
    );
  }
}