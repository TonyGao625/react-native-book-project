import React, { Component } from 'react';
import { Button } from 'react-native';

export default class UserInfo extends Component {
    static navigationOptions = {
    tabBarLabel: '用户'
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Account')}
        title="退出"
      />
    );
  }
}
