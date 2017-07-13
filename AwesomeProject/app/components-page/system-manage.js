import React, { Component } from 'react';
import { View, StyleSheet, AsyncStorage } from 'react-native';
import System from './../compponents-template/system-manage'
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class SystemManage extends Component {
  static navigationOptions  = ({ navigation }) =>({
    tabBarLabel: '管理',
    tabBarIcon: <Icon
        name="settings"
        size={20}
        color='white' />
  });
  render() {
    return (
      <System navigation={this.props.navigation} />
    );
  }
}