import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation'
import MainScreen from './screens/main-screen';
import AccountScreen from './screens/account-screen';
import BookAddScreen from './screens/book-add-screen';
import BookDetailScreen from './screens/book-detail-screen';
import SearchScreen from './screens/book-search-screen';
import { connect } from 'react-redux'
@connect((store) => {
  return {
    IsAuthened: store.accountReducer.permission.IsAuthened,
  }
})

export default class Route extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const RouteItem = CreateRootNavigator(this.props.IsAuthened)
    return (
      <RouteItem />
    );
  }
}
const CreateRootNavigator = (IsAuthened = false) => {
  var initialRouteName = 'Main';
  if (IsAuthened) {
    initialRouteName = 'Main'
  } else {
    initialRouteName = 'Account'
  }

  return StackNavigator({
    Account: {
      screen: AccountScreen,
      navigationOptions: {
        header: null
      }
    },
    Main: {
      screen: MainScreen,
      navigationOptions: {
        headerLeft: null
      }
    },
    BookAdd: {
      screen: BookAddScreen
    },
    BookDetail: {
      screen: BookDetailScreen
    },
    Search: {
      screen: SearchScreen
    }
  }, {
      cardStyle: {
        backgroundColor: 'white'
      },
      initialRouteName: initialRouteName,
      //headerMode:'none'
    });
}



