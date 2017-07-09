import React, { Component } from 'react';
import {
  View, StyleSheet, Text, Image,
  Dimensions,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation'
import { connect } from 'react-redux';
import { getBookCategoryList, VerifyBookName, VerifyAuthor, VerifyCategory, editRemark, editPublicAddress, addBookInfo } from '../actions/book.action';
import FormButton from './../components-smart/button'
import FormTextField from './../components-smart/text-input'
import FormDatePicker from './../components-smart/date-picker'
import FormModelPicker from './../components-smart/model-picker'
import ModalPicker from 'react-native-modal-picker'
const { width, height } = Dimensions.get("window");

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
        BookInfoModel: {
          BookName: this.props.Book.BookName,
          Author: this.props.Book.Author,
          PublicDate: this.props.Book.PublicDate,
          CategoryId: this.props.Book.CategoryId,
        }
      }).then(function () {
        navigate('Main');
      })
    })
  }
  render() {
    const { Book } = this.props;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.inputWrap}>
            <View style={styles.name}>
              <Text>书名:</Text>
            </View>
            <FormTextField
              value={Book.BookName}
              submitted={this.state.submitted}
              keyboardType='phone-pad'
              errorText={Book.BookNameError}
              onChangeText={(val) => this.props.dispatch(VerifyBookName(val))}
            />
          </View>
          <View style={styles.inputWrap}>
            <View style={styles.name}>
              <Text>作者:</Text>
            </View>
            <FormTextField
              value={Book.Author}
              submitted={this.state.submitted}
              keyboardType='phone-pad'
              errorText={Book.AuthorError}
              onChangeText={(val) => this.props.dispatch(VerifyAuthor(val))} />
          </View>
          <View style={styles.inputWrap}>
            <View style={styles.name}>
              <Text>出版时间:</Text>
            </View>
            <FormDatePicker />
          </View>
          <View style={styles.inputWrap}>
            <View style={styles.name}>
              <Text>出版地址:</Text>
            </View>
            <FormTextField
              value={Book.PublicAddress}
              submitted={this.state.submitted}
              keyboardType='phone-pad'
              onChangeText={(val) => this.props.dispatch(editPublicAddress(val))} />
          </View>
          <View style={styles.inputWrap}>
            <View style={[styles.name]}>
              <Text>分类:</Text>
            </View>
            <View style={{ alignItems: "center", justifyContent: "center", height: 40, backgroundColor: 'red' }}>
              <ModalPicker
                data={this.props.BookCategoryList}
                initValue="Select a category!"
                onChange={(option) => this.props.dispatch(VerifyCategory(option.key))} />
            </View>
          </View>
          <Text style={{ color: '#D50000' }}>
            {(this.state.submitted) ? Book.CategoryIDError : ''}
          </Text>
          <View style={styles.inputWrap}>
            <View style={styles.name}>
              <Text>简介:</Text>
            </View>
            <FormTextField
              value={Book.Remark}
              submitted={this.state.submitted}
              keyboardType='phone-pad'
              onChangeText={(val) => this.props.dispatch(editRemark(val))} />
          </View>
        </View>

        <View>
          <FormButton
            onPress={this._saveBook}
            title='保存' />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  markWrap: {
    flex: 1,
    paddingVertical: 30,
  },
  mark: {
    width: null,
    height: null,
    flex: 1,
  },
  background: {
    width,
    height,
  },
  wrapper: {
    paddingVertical: 30,
  },
  inputWrap: {
    flexDirection: "row",
    //marginVertical: 10,
    height: 80,
    borderBottomWidth: 0
  },
  name: {
    paddingHorizontal: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#43A047",
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
  },
  forgotPasswordText: {
    color: "#D8D8D8",
    backgroundColor: "transparent",
    textAlign: "right",
    paddingRight: 15,
  },
  signupWrap: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  accountText: {
    color: "#D8D8D8"
  },
  signupLinkText: {
    color: "#FFF",
    marginLeft: 5,
  }
});