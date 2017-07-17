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
import axios from 'axios';
import FormButton from './../components-cell/form-button'
import { accountLogin, editEmail, editPassword } from '../actions/account.action';
import BookAdd from './../components-page/book-add'
import Styles from './style/user-info'

export default class UserDeatil extends Component {
  componentWillMount() {
   
  }
  _logout=()=>{
    AsyncStorage.removeItem('permission');
    this.props.dispatch(editEmail(''));
    this.props.dispatch(editPassword(''));
    const { navigate } = this.props.navigation;
    navigate('Account')
  }
  render() {
    return (
      <ScrollView contentContainerStyle={Styles.contentContainer}>
           <FormButton 
              title='退出' 
              onPress={this._logout}
          />
      </ScrollView>
  );
  }
}




