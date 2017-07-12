import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import BookDetailDisplay from './../compponents-template/book-detail-display'

export default class BookDetail extends Component {
  static navigationOptions =({navigation})=> ({
   // title: navigation.state.params.id,
  })
  render() {
    return (
        <BookDetailDisplay navigation={this.props.navigation} id={this.props.navigation.state.params.id} />
    );
  }
}