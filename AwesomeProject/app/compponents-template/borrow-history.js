import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ListView,
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation'
import { connect } from 'react-redux';
import { getBookList } from '../actions/book.action';
import axios from 'axios';
import FormButton from './../components-cell/form-button'

import BookAdd from './../components-page/book-add'
import Styles from './style/borrow-history'

@connect((store) => {
  return {
    BookList: store.bookReducer.BookList
  }
})

export default class BorrowHistory extends Component {
  componentWillMount() {
    this.props.dispatch(getBookList());
  }
  _addBook= () => {
    const { navigate } = this.props.navigation;
    navigate('BookAdd')
  }
  render() {
    return (
      <ScrollView contentContainerStyle={Styles.contentContainer}>
          <View>
            {
                this.props.BookList.map((val) => {
                  return <View 
                  key={val.Id}
                  style={Styles.item}>
                    <Text>{val.BookName}</Text>
                    <Text style={{color:'red'}}>张山</Text>
                  </View>
                })
              }
          </View>  
        </ScrollView>
  );
  }
}



