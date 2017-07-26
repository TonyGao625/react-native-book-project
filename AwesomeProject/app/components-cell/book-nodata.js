import React, { Component } from 'react';
import { Text } from 'react-native';

export default class BookNoData extends Component {
  render() {
    return (
      <Text style={{marginLeft:10, marginTop:10,color:'red', textAlign:'center'}}>
        没有数据 !
      </Text>
    );
  }
}
