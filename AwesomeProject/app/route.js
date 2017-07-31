import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation'
import MainScreen from './screens/main-screen';
import AccountScreen from './screens/account-screen';
import BookAddScreen from './screens/book-add-screen';
import BookDetailScreen from './screens/book-detail-screen';
import SearchScreen from './screens/book-search-screen';
import AppIntroScreen from './screens/appIntro-screen';
import { connect } from 'react-redux'
import { getPermission, checkViewIntro } from './actions/account.action'

@connect((store) => {
  return {
    permission: store.accountReducer.permission,
  }
})

export default class Route extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthened: false,
    };
  }
  componentWillMount() {
    this.props.dispatch(getPermission());
  }
  componentWillReceiveProps(nextProps) {
    // if (this.props.permission.IsAuthened != nextProps.permission.IsAuthened) {
    //   this.setState({
    //     isAuthened: nextProps.permission.IsAuthened,
    //   });
    // }
    this.setState({
      isAuthened: nextProps.permission.IsAuthened,
    });
  }
  render() {
    const RouteItem = CreateRootNavigator(this.state.isAuthened);
    return (
      <RouteItem />
    );
  }
}
const CreateRootNavigator = (IsAuthened = true) => {
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
    AppIntro: {
      screen: AppIntroScreen,
      navigationOptions: {
        header: null
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



