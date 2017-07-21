import React, { Component } from 'react';
import { View, StyleSheet, TouchableHighlight, Text } from 'react-native';
import BookDetailDisplay from './../compponents-template/book-detail-display'
import Icon from 'react-native-vector-icons/Octicons';
import FormCustomButton from './../components-cell/form-custom-botton'

export default class BookDetailScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight:
    <FormCustomButton
      activeOpacity={.5}
      text='借阅'
      styleView={styles.button}
      styleText={styles.buttonText}
      onPress={this._loginAccount} />
  })
  render() {
    return (
      <BookDetailDisplay navigation={this.props.navigation} id={this.props.navigation.state.params.id} />
    );
  }
}

styles = StyleSheet.create({
  button: {
    backgroundColor: "#43A047",
    paddingVertical: 10,
    marginRight: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10
  },
  buttonText: {
    color: "#FFF",
  },
})