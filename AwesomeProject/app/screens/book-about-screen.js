import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Styles from './style/book-about-screen'
import Icon from 'react-native-vector-icons/Octicons';
import Themes from './../src/themes/themes'

export default class BookAbout extends Component {
  render() {
    return (
      <View style={Styles.about}>
          <View style={Styles.mark}>
            <Icon name="book" size={120} color={Themes.color}/>
            <Text>版本： 1.0.0</Text>
            <Text>作者： 高强、黄紫霞</Text>
          </View>
          <View style={Styles.bottom}>
            <Text style={Styles.item}>
              《盛安德软件许可及服务协议》 和 《隐私政策》
            </Text>
            <Text>
              武汉盛安德分公司 版权所有
            </Text>
            <Text>
              Copyright @2017 Shengande
            </Text>
            <Text>
              All Right Reserved
            </Text>
          </View>
      </View>
    );
  }
}