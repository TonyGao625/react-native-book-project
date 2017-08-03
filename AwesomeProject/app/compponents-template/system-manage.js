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
import { ImagePicker } from 'antd-mobile';

const data = [{
  url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
  id: '2121',
}, {
  url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
  id: '2122',
}];

export default class SystemManage extends Component {
  _addBookInfo = () => {
    const { navigate } = this.props.navigation;
    navigate('BookAdd')
  }
  _takePhoto = () => {
    const { navigate } = this.props.navigation;
    navigate('TakePhoto')
  }
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      files: data,
    };
  }
  onChange = (files, type, index) => {
    debugger;
    this.setState({
      files,
    });
  };
  // onAddImageClick = (e) => {
  //   e.preventDefault();
  //   this.setState({
  //     files: this.state.files.concat({
  //       url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
  //       id: '3',
  //     }),
  //   });
  // };
  onTabChange = (key) => {
    console.log(key);
  };
  render() {
    const { files } = this.state;
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

        <ImagePicker
          files={files}
          onChange={this.onChange}
          onImageClick={(index, fs) => console.log(index, fs)}
          selectable={files.length < 5}
          onAddImageClick={this.onAddImageClick}
        />
      </ScrollView>
    );
  }
}




