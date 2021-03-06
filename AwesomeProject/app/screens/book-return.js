import React, { Component } from 'react';
import { ScrollView, View, Text, Alert } from 'react-native';
import Return from './../compponents-template/book-return'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Badge } from 'antd-mobile';
import { connect } from 'react-redux';

@connect((store) => {
  return {
    OverTimeCount: store.bookReturnReducer.OverTimeCount
  }
})

class ReturnIcon extends Component {
  render() {
    return (
      <View>
        {this.props.OverTimeCount > 0 ?
          <View>
            <Icon
              name="assignment-return"
              size={20}
              color='white' />
            <Badge dot style={{ position: 'absolute', right: 5, top: 2 }}></Badge>
          </View>
          :
          <Icon
            name="assignment-return"
            size={20}
            color='white' />}
      </View>
    )
  }
}

export default class BookReturn extends Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarLabel: '还书',
    tabBarIcon: <ReturnIcon navigation={navigation} />
  });
  render() {
    return (
      <Return navigation={this.props.navigation} />
    );
  }
}