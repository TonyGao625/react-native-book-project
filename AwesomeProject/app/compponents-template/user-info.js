import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ListView,
  AsyncStorage
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation'
import { connect } from 'react-redux';
import FormButton from './../components-cell/form-button'
import { accountLogin, editUserName, editPassword } from '../actions/account.action';
import Styles from './style/user-info'
import FormCustomButton from './../components-cell/form-custom-botton'

@connect((store) => {
  return { 
  }
})
export default class UserDeatil extends Component {

  componentWillMount() {

  }
  _logout = () => {
    AsyncStorage.removeItem('permission');
    this.props.dispatch(editUserName(''));
    this.props.dispatch(editPassword(''));
    const { navigate } = this.props.navigation;
    navigate('Account')
  }
  render() {
    return (
      <ScrollView contentContainerStyle={Styles.contentContainer}>
        <FormCustomButton 
              activeOpacity={.5}
              text='退出'
              styleView={Styles.button}
              styleText={Styles.buttonText}
              onPress={this._logout}/>
      </ScrollView>
    );
  }
}




