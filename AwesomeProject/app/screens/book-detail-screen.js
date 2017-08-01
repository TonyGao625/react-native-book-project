import React, { Component } from 'react';
import { View, StyleSheet, TouchableHighlight, Text } from 'react-native';
import BookDetailDisplay from './../compponents-template/book-detail-display'
import Icon from 'react-native-vector-icons/Octicons';
import FormCustomButton from './../components-cell/form-custom-botton'
import Themes from './../src/themes/themes'
import { getBookList, borrowBook, collectBook } from '../actions/book.action';
import { changeData } from '../actions/common.action'
import { connect } from 'react-redux';
import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';

export default class BookDetailScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight:
    <FormCustomButton
      activeOpacity={.5}
      text='借阅'
      disabled={!navigation.state.params.CanOrder}
      styleView={navigation.state.params.CanOrder ? styles.button : styles.disabledButton}
      styleText={styles.buttonText}
      onPress={
        () => {
          var data = {
            BookCollectionModel: {
              BookId: navigation.state.params.id,
              UserId: navigation.state.params.UserId,
              CollectionDate: new Date()
            }
          };
          collectBook(data).then(() => {
            Toast.success('添加到借阅单成功', 1);
            this.props.dispatch(changeData());
          });
          navigation.setParams({
            CanOrder: false
          })
        }
      } />
  })
  render() {
    return (
      <BookDetailDisplay navigation={this.props.navigation} id={this.props.navigation.state.params.id} />
    );
  }
}

styles = StyleSheet.create({
  button: {
    backgroundColor: Themes.color,
    paddingVertical: 10,
    marginRight: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10
  },
  disabledButton: {
    backgroundColor: "grey",
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