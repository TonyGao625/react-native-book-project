import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ListView,
  AsyncStorage,
  Alert
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation'
import { connect } from 'react-redux';
import FormButton from './../components-cell/form-button'
import { accountLogin, editUserName, editPassword, clearPermission } from '../actions/account.action';
import Styles from './style/user-info'
import FormCustomButton from './../components-cell/form-custom-botton'
import Icon from 'react-native-vector-icons/Octicons';

@connect((store) => {
  return {
    permission: store.accountReducer.permission
  }
})

export default class UserDeatil extends Component {
  _logout = () => {
    Alert.alert('',
      "确定要退出程序吗？",
      [
        { text: '取消', onPress: console.log("取消") },
        {
          text: '继续', onPress: () => {
            this.props.dispatch(clearPermission());
            this.props.dispatch(editUserName(''));
            this.props.dispatch(editPassword(''));
          }
        },
      ],
      { cancelable: false }
    )
  }
  _onAbout = () => {
    const { navigate } = this.props.navigation;
    navigate('BookAboutScreen')
  }
  _onAddBook = () => {
    const { navigate } = this.props.navigation;
    navigate('BookAdd')
  }
  render() {
    return (
      <ScrollView contentContainerStyle={Styles.user}>
        <View style={Styles.mainView}>
          {this.props.permission.RoleId == 1 ?
            <TouchableOpacity
              activeOpacity={1}
              style={Styles.aboutView}
              onPress={this._onAddBook}>
              <Icon style={Styles.aboutIcon} name="diff-added" size={20} />
              <Text style={Styles.aboutText}>添加图书</Text>
            </TouchableOpacity>
            :
            <View></View>
          }


          <TouchableOpacity
            activeOpacity={1}
            style={Styles.aboutView}
            onPress={this._onAbout}>
            <Icon style={Styles.aboutIcon} name="versions" size={20} />
            <Text style={Styles.aboutText}>关于</Text>
          </TouchableOpacity>
        </View>

        <View style={Styles.bottomView}>
          <FormCustomButton
            activeOpacity={.5}
            text='退出'
            styleView={Styles.button}
            styleText={Styles.buttonText}
            onPress={this._logout} />
        </View>
      </ScrollView>
    );
  }
}




