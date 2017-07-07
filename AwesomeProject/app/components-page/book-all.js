import React, { Component } from 'react';
import { View, StyleSheet,Button,AsyncStorage } from 'react-native';
import BookList from './../compponents-template/book-all'

export default class BookAll extends Component {
    static navigationOptions = {
    tabBarLabel: '全部',
  };
  componentWillMount() {
    AsyncStorage.getItem('permission').then((value) => {
      const { navigate } = this.props.navigation;
      if(value==null){
         navigate('Account');
      }

      const permission = JSON.parse(value);
      if(!permission.IsAuthened){
          navigate('Account');
      }
    });
  }
  render() {
    return (
        <BookList navigation={this.props.navigation}/>
    );
  }
}


