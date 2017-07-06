import React, { Component } from 'react';
import { View, StyleSheet, ScrollView ,KeyboardAvoidingView} from 'react-native';
import Login from './../compponents-template/login'

export default class Account extends Component {
  render() {
    return (
      <ScrollView>     
           <Login navigation={this.props.navigation} />
      </ScrollView>

    );
  }
}


