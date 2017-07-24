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
import { getBookList } from '../actions/book.action';
import axios from 'axios';
import Styles from './style/book-collection'
import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';

@connect((store) => {
  return {
    BookList: store.bookReducer.BookList
  }
})

export default class BookCollection extends Component {
  componentWillMount() {
    this.props.dispatch(getBookList());
  }
  _logout=()=>{
    AsyncStorage.removeItem('permission');
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



