import React, { Component } from 'react';
import { View, StyleSheet, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Themes from './../src/themes/themes'

export default class UserLogout extends Component {
  _logout=()=>{
    AsyncStorage.removeItem('permission');
    const { navigate } = this.props.navigation;
    navigate('Account')
  }
  render() {
    return (
      <Icon 
          onPress={this._logout}
          style={{marginRight:10, fontWeight:'bold'}}
          name="logout" 
          color={Themes.color}
          size={20}/>
    );
  }
}