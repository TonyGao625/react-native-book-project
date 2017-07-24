import React, { Component } from 'react';
import {
  Text,
  View,
  ListView,
  AsyncStorage,
  TouchableHighlight,
  Alert,
  TouchableOpacity
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation'
import { connect } from 'react-redux';
import { getBookList, borrowBook, collectBook } from '../actions/book.action';
import FormButton from './../components-cell/form-button'
import Icon from 'react-native-vector-icons/MaterialIcons';
import storage from 'store2';
import { changeData } from '../actions/common.action'
import { getPermission } from '../actions/account.action'
import Styles from './style/book-all'
import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';
import ResponsiveImage from 'react-native-responsive-image';
@connect((store) => {
  return {
    BookList: store.bookReducer.BookList,
    Flag: store.commonReducer.Flag,
    permission: store.accountReducer.permission
  }
})

export default class BookAll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disable: false
    };
  }
  componentWillMount() {
    this.props.dispatch(getPermission());
    this._search();
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.Flag !== nextProps.Flag) {
      this._search();
    }
  }
  _search = () => {
    var BookName = storage.session('BookName');
    var CategoryId = storage.session('CategoryId');
    var data = {
      BookName: BookName == null ? "" : BookName,
      CategoryId: CategoryId == null ? 0 : CategoryId
    };
    this.props.dispatch(getBookList(data));
  }
  _addBook = () => {
    const { navigate } = this.props.navigation;
    navigate('BookAdd')
  }
  _collectBook = (val) => {
    if (!val.CanOrder) {
      return;
    }
    var data = {
      BookCollectionModel: {
        BookId: val.Id,
        UserId: this.props.permission.UserId,
        CollectionDate: new Date()
      }
    };
    collectBook(data).then(() => {
      Toast.success('添加到借阅单成功', 1);
      this.props.dispatch(changeData());
    });
  }
  _preventClickTwice() {
    this.setState({ disable: true });
    setTimeout(() => { this.setState({ disable: false }) }, 1000)
  }
  _showDetailBook = (id) => {
    this._preventClickTwice();
    const { navigate } = this.props.navigation;
    navigate('BookDetail', { id: id })
  }
  render() {
    return (
      <View>
        {
          this.props.BookList.map((val) => {
            return <View style={Styles.itemContainer} >
              <View style={Styles.imageContainer} >
                <TouchableOpacity onPress={() => this._showDetailBook(val.Id)}
                  disabled={this.state.disable}>
                  <ResponsiveImage source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }} initWidth="100" initHeight="100" />
                </TouchableOpacity>
              </View>
              <View style={Styles.bookContainer} >
                <TouchableOpacity onPress={() => this._showDetailBook(val.Id)}
                  disabled={this.state.disable}>
                  <View style={{ paddingBottom: 6 }} >
                    <Text style={{ fontWeight: "bold", fontStyle: "italic", fontSize: 15 }}>{val.BookName}</Text>
                  </View>
                  <View style={{ paddingBottom: 6 }}>
                    <Text>作者：{val.Author}</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={Styles.statusIcon} >
                <TouchableOpacity onPress={() => this._collectBook(val)}>
                  <Icon
                    name="library-add"
                    color={val.CanOrder ? 'black' : '#ddd'}
                    size={25} />
                </TouchableOpacity>
              </View>
            </View>
          })
        }
      </View>
    );
  }
}
