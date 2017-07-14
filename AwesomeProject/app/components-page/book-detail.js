import React, { Component } from 'react';
import { View, StyleSheet, TouchableHighlight, Text } from 'react-native';
import BookDetailDisplay from './../compponents-template/book-detail-display'
import Icon from 'react-native-vector-icons/Octicons';
export default class BookDetail extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight:
    <View style={styles.PinButton} >
      <View style={styles.PinIcon} >
        <Icon name="pin" size={25} color='white' />
      </View>
      <Text style={styles.PinButtonText} >借阅</Text>
    </View>
  })
  render() {
    return (
      <BookDetailDisplay navigation={this.props.navigation} id={this.props.navigation.state.params.id} />
    );
  }
}

styles = StyleSheet.create({
  PinButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'navy',
    padding: 5,
    borderRadius: 5,
    width: 70,
    marginRight: 8
  },
  PinButtonText: {
    color: 'white'
  }
})