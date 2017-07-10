import React, { Component } from 'react';
import { AsyncStorage, ScrollView, StyleSheet } from 'react-native';
import BookList from './../compponents-template/book-all'
import Icon from 'react-native-vector-icons/MaterialIcons';
import MainAdd from './../compponents-template/main-add';
export default class BookAll extends Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarLabel: '全部',
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name="apps"
        size={20}
        style={[{ tintColor: tintColor }]}
        color='white' />
    ),
    headerRight: (
      <MainAdd navigation={navigation} />
    )
  });

  componentWillMount() {
    AsyncStorage.getItem('permission').then((value) => {
      const { navigate } = this.props.navigation;
      if (value == null) {
        navigate('Account');
      }

      const permission = JSON.parse(value);
      if (!permission.IsAuthened) {
        navigate('Account');
      }
    });
  }
  render() {
    return (
      <ScrollView>
        <BookList navigation={this.props.navigation} />
      </ScrollView>
    );
  }
}



