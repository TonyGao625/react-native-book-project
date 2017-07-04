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

@connect((store) => {
  return {
    BookList: store.bookReducer.BookList
  }
})

export default class BookAll extends Component {
  static navigationOptions = {
    tabBarLabel: '全部'
  };
  componentWillMount() {
    this.props.dispatch(getBookList());
  }
  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
            {
              this.props.BookList.map((val) => {
                return <Text style={styles.item}>{val.BookName}</Text>
              })
            }
      </ScrollView>
  );
  }
}

const styles = StyleSheet.create({
  item: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    height: 50,
    lineHeight: 40,
    marginLeft: 15,
    marginRight: 15
  }
});