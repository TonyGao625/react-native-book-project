import {TabNavigator} from 'react-navigation'
import BookAll from './book-all';
import BookBorrow from './book-borrow';
import BookHistory from './borrow-history';
import BookCollection from './book-collection';
import UserInfo from './../compponents-template/users-info';
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import storage from 'store2';


export default class Main extends Component {
  componentWillMount() {
    const RoleId = storage.get('RoleId');
    alert(aaa.name);
  }
  render() {
    return (
      <MenuBottom/>
  );
  }
}

const MenuBottom = TabNavigator({
  BookAll: {
    screen: BookAll,
  },
  BookBorrow: {
    screen: BookBorrow,
  },
  BookHistory: {
    screen: BookHistory,
  },
  BookCollection: {
    screen: BookCollection,
  }
}, {
  tabBarOptions: {
    activeTintColor: '#e91e63',
    labelStyle: {
        fontWeight:'bold'
    },
    style: {
        backgroundColor: '#43A047',
    },
  },
  tabBarPosition: 'bottom'
});


