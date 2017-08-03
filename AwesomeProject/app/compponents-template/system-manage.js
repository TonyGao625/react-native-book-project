import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ListView,
  AsyncStorage
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation'
import FormButton from './../components-cell/form-button'

export default class SystemManage extends Component {
  _addBookInfo=()=>{
    const { navigate } = this.props.navigation;
      navigate('BookAdd')
  }
  _takePhoto=()=>{
    const { navigate } = this.props.navigation;
    navigate('TakePhoto')
  }
  render() {
    return (
      <ScrollView>
           {/* <FormButton 
              title='添加图书信息' 
              onPress={this._addBookInfo}
          /> */}

          <FormButton 
              title='拍照' 
              onPress={this._takePhoto}
          />
      </ScrollView>
  );
  }
}




