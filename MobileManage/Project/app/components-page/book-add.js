import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import BookDetail from './../compponents-template/book-add'

export default class BookAdd extends Component {
  render() {
    return (
        <BookDetail navigation={this.props.navigation}/>
    );
  }
}