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
import FormButton from './../components-smart/button'

import BookAdd from './../components-page/book-add'

@connect((store) => {
  return {
    BookList: store.bookReducer.BookList
  }
})

export default class UserDeatil extends Component {
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
      <ScrollView contentContainerStyle={styles.contentContainer}>
           <FormButton 
              title='退出' 
              onPress={this._logout}
          />
      </ScrollView>
  );
  }
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    height: 40,
    paddingTop:10,
    marginLeft: 15,
    marginRight: 15
  }
});



