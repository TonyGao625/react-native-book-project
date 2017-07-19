import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  ScrollView,
  TouchableHighlight,
  Alert
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation'
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CheckBox from 'react-native-check-box'
import FormButton from './../components-cell/form-button'
import { getBookBorrowList, BookBorrowList, selectALL, unSelectALL } from '../actions/book.borrow.action'
import { getPermission } from '../actions/account.action'
import BookOperation from './../components-cell/book-operation'
import { changeData } from '../actions/common.action'
import Styles from './style/book-borrow'

@connect((store) => {
  return {
    BookBorrowList: store.bookBorrowReducer.BookBorrowList,
    permission: store.accountReducer.permission,
    Flag: store.commonReducer.Flag
  }
})

export default class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedAll: false,
      sum: 0
    };
  }
  componentWillMount() {
    this.props.dispatch(getPermission());
    this.props.dispatch(getBookBorrowList(this.props.permission.UserId));
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.Flag !== nextProps.Flag) {
      this.setState({
        checkedAll: false,
        sum: 0
      });
      this.props.dispatch(getBookBorrowList(this.props.permission.UserId));
    }
  }
  _onClick = (data) => {
    data.isCheck = !data.isCheck;
    if (data.isCheck) {
      this.setState({
        sum: this.state.sum + 1
      });
    } else {
      this.setState({
        sum: this.state.sum - 1
      });
    }
  }
  _onCheckAll = () => {
    this.setState({
      checkedAll: !this.state.checkedAll
    });
    if (!this.state.checkedAll) {//select all
      this.setState({
        sum: this.props.BookBorrowList.length
      });
      this.props.dispatch(selectALL(this.props.BookBorrowList));
    } else {
      this.setState({//select all
        sum: 0
      });
      this.props.dispatch(unSelectALL(this.props.BookBorrowList));
    }
  }
  _onBorrowBook = () => {
    var BookCollectionList = this.props.BookBorrowList.filter(x => x.isCheck == true);
    if (BookCollectionList.length < 1) {
      Alert.alert('', '请选择要借阅的图书', [], { cancelable: true });
      return;
    }

    var data = {
      BookCollectionList: BookCollectionList,
      UserId: this.props.permission.UserId,
      BorrowDate: new Date()
    }
    BookBorrowList(data).then(() => {
      // alert('借阅成功');
      Alert.alert('', '借阅成功', [], { cancelable: true });
      this.props.dispatch(changeData());

      this.setState({
        checkedAll: false,
        sum: 0
      });
    });
  }
  _showDetailBook = (id) => {
    const { navigate } = this.props.navigation;
    navigate('BookAdd')
  }
  render() {
    return (
      <View style={Styles.borrow}>
        <ScrollView>
          <View style={Styles.container}>
            {
              this.props.BookBorrowList.map((val) => {
                return <View
                  key={val.Id}
                  style={Styles.item}>
                  <Text style={Styles.title}
                    onPress={() => this._showDetailBook(val.Id)}>{val.BookName}</Text>
                  <View style={Styles.statusIcon}>
                    <Icon
                      onPress={() => this._onClick(val)}
                      name={val.isCheck ? 'check-circle' : 'radio-button-unchecked'}
                      color='black'
                      size={20} />
                  </View>
                </View>
              })
            }
          </View>
        </ScrollView>
        <BookOperation
          isCheckAll={this.state.checkedAll}
          total={this.state.sum}
          onCheckAll={this._onCheckAll}
          onBorrowBook={this._onBorrowBook}
          lable='借阅' />
      </View>
    );
  }
}

