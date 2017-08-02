import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import BookList from './../compponents-template/book-borrow'
import Icon from 'react-native-vector-icons/MaterialIcons';

class EditText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '编辑',
    };
  }
  _changeEdit=()=>{
    this.setState({
       text: '完成'
    });
  }
  render() {
    var navigation=this.props.navigation;
    return (
      <TouchableOpacity onPress={this._changeEdit}>
        <Text style={{ color: "black", fontWeight: "bold", fontSize: 16, paddingRight: 10 }} >{this.state.text}</Text>
      </TouchableOpacity>
    )
  }
}


export default class BookBorrow extends Component {
  static navigationOptions = {
    tabBarLabel: '借阅单',
    tabBarIcon: <Icon
      name="library-books"
      size={20}
      color='white' />,
    headerRight: <EditText/>
  };
  render() {
    return (
      <BookList navigation={this.props.navigation} />
    );
  }
}



