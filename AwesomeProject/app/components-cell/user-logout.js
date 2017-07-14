import React, { Component } from 'react';
import { View, StyleSheet, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
          name="power-settings-new" 
          color='#43A047'
          size={20}/>
    );
  }
}