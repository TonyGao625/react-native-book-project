import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation'
import { Button,Text, View } from 'react-native';
import Main from './main';
import Account from './account';
import BookAdd from './book-add';
import MainAdd from './../compponents-template/main-add';

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

const mainNavigationOptions = ({ navigation }) => ({
    headerTitle: <Text>全部</Text>,
    headerRight: 
      <MainAdd navigation={navigation}/>,
    headerStyle:{
      paddingRight:10
    }
  });

const RouteItem = StackNavigator({
  Account:{
    screen: Account,
    navigationOptions:{
      //headerTitle:'登录'
      header:null
    }
  },
  Main: {
    screen: Main,
    navigationOptions: mainNavigationOptions
  },
  BookAdd:{
    screen: BookAdd
  }
},{
  cardStyle:{
    backgroundColor:'white'
  },
  initialRouteName:'Main',
  //headerMode:'none'
});


