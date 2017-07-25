import React, { Component } from 'react';
import {
  View, Text, Image,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
  Alert
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation'
import { connect } from 'react-redux';
import { getBookCategoryList, VerifyBookName, VerifyAuthor, VerifyCategory, editRemark, editPublicAddress, addBookInfo, editDate } from '../actions/book.action';
import FormButton from './../components-cell/form-button'
import FormTextField from './../components-cell/form-text-input'
import FormDatePicker from './../components-cell/form-date-picker'
import FormModelPicker from './../components-cell/form-model-picker'
import ModalPicker from 'react-native-modal-picker'
import { batchActions, enableBatching } from 'redux-batched-actions';
import Styles from './style/book-add'
import { Toast, WhiteSpace, WingBlank} from 'antd-mobile';

@connect((store) => {
  return {
    BookCategoryList: store.bookReducer.BookCategoryList,
    Book: store.bookReducer.Book
  }
})

export default class BookAll extends Component {
  constructor() {
    super();
    this.state = {
      submitted: false,
    };
  }
  componentWillMount() {
    this.props.dispatch(getBookCategoryList());
  }
  _saveBook = () => {
    this.setState({
      submitted: true
    });
    this.props.dispatch(VerifyBookName(this.props.Book.BookName))
    this.props.dispatch(VerifyAuthor(this.props.Book.Author))
    this.props.dispatch(VerifyCategory(this.props.Book.CategoryId))
    setTimeout(() => {
      if (this.props.Book.BookNameError || this.props.Book.AuthorError || this.props.Book.CategoryIDError) {
        return;
      }
      const { navigate } = this.props.navigation;
      addBookInfo({
        BookInfoModel: this.props.Book
      }).then((res) => {
        this.props.dispatch({
          type: 'CLEAR_BOOK'
        })
        Alert.alert('', 'Book was saved successfully.', [{ text: 'OK', onPress: () => navigate('Main') },], { cancelable: true });
      })
    })
  }
  render() {
    const { Book, BookList } = this.props;
    return (
      <ScrollView style={Styles.container}>
        <View style={Styles.wrapper}>
          <FormModelPicker
            initValue="分类"
            errorText={Book.CategoryIDError}
            submitted={this.state.submitted}
            onChange={(option) => this.props.dispatch(VerifyCategory(option.key))}
            data={this.props.BookCategoryList} />
          <FormTextField
            placeholder='书名'
            value={Book.BookName}
            submitted={this.state.submitted}
            keyboardType='phone-pad'
            errorText={Book.BookNameError}
            onChangeText={(val) => this.props.dispatch(VerifyBookName(val, BookList))}
          />
          <FormTextField
            placeholder='作者'
            value={Book.Author}
            submitted={this.state.submitted}
            keyboardType='phone-pad'
            errorText={Book.AuthorError}
            onChangeText={(val) => this.props.dispatch(VerifyAuthor(val))} />
            <FormDatePicker
            placeholder='出版日期'
            showIcon={false}
            date={Book.PublicDate}
            onDateChange={(val) => this.props.dispatch(editDate(val))} />
          <FormTextField
            placeholder='出版地址'
            value={Book.PublicAddress}
            submitted={this.state.submitted}
            keyboardType='phone-pad'
            onChangeText={(val) => this.props.dispatch(editPublicAddress(val))} />
          <FormTextField
            placeholder='简介'
            value={Book.Remark}
            submitted={this.state.submitted}
            keyboardType='phone-pad'
            onChangeText={(val) => this.props.dispatch(editRemark(val))} />
        </View>
        <TouchableOpacity activeOpacity={.5} onPress={this._saveBook}>
          <View style={Styles.button}>
            <Text style={Styles.buttonText}>保存</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}
