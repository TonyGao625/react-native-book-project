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
import FormButton from './../components-smart/button'

import BookAdd from './../components-page/book-add'

@connect((store) => {
  return {
    BookList: store.bookReducer.BookList
  }
})

export default class BookCollection extends Component {
  componentWillMount() {
    this.props.dispatch(getBookList());
  }
  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
          <View>
            {
                this.props.BookList.map((val) => {
                  return <View style={styles.item}>
                    <Text>{val.BookName}</Text>
                  </View>
                })
              }
          </View>  
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


