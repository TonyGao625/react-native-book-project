import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, 
  TouchableOpacity,
  ScrollView,
  ListView,
  Image,
  Button
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation'

export default class BorrowHistory extends Component {
    static navigationOptions = {
    tabBarLabel: '借阅记录',
    tabBarIcon: ({ tintColor }) => (
      <Image
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});