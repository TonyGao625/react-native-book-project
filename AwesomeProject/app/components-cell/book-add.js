import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Themes from './../src/themes/themes'

export default class MainAdd extends Component {
 _addBook = () => {
      const { navigate } = this.props.navigation;
      navigate('BookAdd')
  }
  render() {
    return (
      <Icon 
        name="add" 
        onPress={this._addBook}
        size={40} 
        color={Themes.color} />
    );
  }
}

