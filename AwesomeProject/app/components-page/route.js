import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation'
import { Button, Text, View,TouchableHighlight } from 'react-native';
import Main from './main';
import Account from './account';
import BookAdd from './book-add';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default class Route extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <RouteItem />
    );
  }
}

const RouteItem = StackNavigator({
  Account: {
    screen: Account,
    navigationOptions: {
      header: null
    }
  },
  Main: {
    screen: Main
  },
  BookAdd: {
    screen: BookAdd
  }
}, {
    cardStyle: {
      backgroundColor: 'white'
    },
    initialRouteName: 'Main',
    //headerMode:'none'
  });


