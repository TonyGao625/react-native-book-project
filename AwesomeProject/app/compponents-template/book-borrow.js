import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  ScrollView,
  TouchableHighlight,
  Alert,
  TouchableOpacity
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation'
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CheckBox from 'react-native-check-box'
import FormButton from './../components-cell/form-button'
import { getBookBorrowList, BookBorrowList, selectALL, unSelectALL, SureBorrowBook } from '../actions/book.borrow.action'
import { getPermission } from '../actions/account.action'
import BookOperation from './../components-cell/book-operation'
import { changeData } from '../actions/common.action'
import Styles from './style/book-borrow'
import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';
import BookNoData from './../components-cell/book-nodata'
import Config from '../config/config'
import ResponsiveImage from 'react-native-responsive-image';


@connect((store) => {
  return {
    BookBorrowList: store.bookBorrowReducer.BookBorrowList,
    Opearation: store.bookBorrowReducer.Opearation,
    permission: store.accountReducer.permission,
    Flag: store.commonReducer.Flag
  }
})

export default class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedAll: false,
      sum: 0,
      disable: false
    };
  }
  componentWillMount() {
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
  _onCheck = (data) => {
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
      Toast.info('请选择要借阅的图书!', 1);
      return;
    }

    var data = {
      BookCollectionList: BookCollectionList,
      UserId: this.props.permission.UserId,
      BorrowDate: new Date()
    }
    BookBorrowList(data).then((res) => {
      if (res.result.Status == 1) {
        Toast.success('借阅成功', 1);
        this.props.dispatch(changeData());
        this._cancelBorrow();
      } else {
        Alert.alert('',
          res.result.Message,
          [
            { text: '取消', onPress: this._cancelBorrow },
            { text: '继续', onPress: () => this._sureBorow(data) },
          ],
          { cancelable: false }
        )
      }
    });
  }
  _cancelBorrow = () => {
    this.props.dispatch(unSelectALL(this.props.BookBorrowList));
    this.setState({
      checkedAll: false,
      sum: 0
    });
  }
  _sureBorow = (data) => {
    SureBorrowBook(data).then((res) => {
      Alert.alert('', res.result.Message, [], { cancelable: true });
      this.props.dispatch(changeData());
      this._cancelBorrow();
    });
  }
  _preventClickTwice() {
    this.setState({ disable: true });
    setTimeout(() => { this.setState({ disable: false }) }, 2000)
  }
  _showDetailBook = (id, CanOrder) => {
    this._preventClickTwice();
    const { navigate } = this.props.navigation;
    navigate('BookDetail', { id: id, CanOrder: CanOrder })
  }
  render() {
    return (
      <View style={Styles.borrow}>
        <ScrollView>
          <View style={Styles.container}>
            {
              this.props.BookBorrowList.length > 0 ?
                <View>
                  {
                    this.props.BookBorrowList.map((val) => {
                      return <View
                        key={val.Id}
                        style={Styles.item}>
                          <View style={Styles.imageContainer} >
                            <TouchableOpacity onPress={() => this._showDetailBook(val.BookId, val.CanOrder)}   disabled={this.state.disable}>
                              <ResponsiveImage source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }} initWidth="100" initHeight="100" />
                            </TouchableOpacity>
                          </View>
                          <View style={Styles.bookContainer} >
                            <View style={{ paddingBottom: 6 }} >
                              <Text style={{ fontWeight: "bold", fontStyle: "italic", fontSize: 15 }}>{val.BookName}</Text>
                            </View>
                            <View style={{ paddingBottom: 6 }}>
                              <Text>作者：{val.Author}</Text>
                            </View>
                          </View>
                          <View style={Styles.statusIcon} >
                             <TouchableOpacity onPress={() => this._onCheck(val)}>
                              <Icon
                               name={val.isCheck ? 'check-circle' : 'radio-button-unchecked'}
                                 color='black'
                                size={20} />
                            </TouchableOpacity> 
                          </View>
                        </View>
                    })
                  }
                </View>
                :
                <BookNoData />
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


