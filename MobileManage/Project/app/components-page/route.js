import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation'
import { Button,Text, View } from 'react-native';
import Main from './main';
import Account from './account';

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
  Account:{
    screen: Account,
    navigationOptions:{
      headerTitle:'登录'
    }
  },
  Main: {
    screen: Main,
    navigationOptions:{
      headerTitle: <Text>全部</Text>,
      headerRight: 
       <Text>管理员</Text>,
      headerStyle:{
        paddingRight:10
      }
    }
  }
},{
  cardStyle:{
    backgroundColor:'white'
  }
  //initialRouteName:'Main'
});
