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
import BookNoData from './../components-cell/book-nodata'
import Config from '../config/config'

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
    this._search(this.props.permission.UserId);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.Flag !== nextProps.Flag) {
      this._search(this.props.permission.UserId);
    }
  }
  _search = (userId) => {
    var BookName = storage.session('BookName');
    var CategoryId = storage.session('CategoryId');
    var data = {
      UserId:userId,
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
  _showDetailBook = (id,CanOrder) => {
    this._preventClickTwice();
    const { navigate } = this.props.navigation;
    navigate('BookDetail', { id: id,CanOrder:CanOrder})
  }
  render() {
    
    return (
      <View>
        {this.props.BookList.length>0?
        <View>
          {
          this.props.BookList.map((val) => {
            return <View style={Styles.itemContainer} >
              <View style={Styles.imageContainer} >
                <TouchableOpacity onPress={() => this._showDetailBook(val.Id, val.CanOrder)}
                  disabled={this.state.disable}>
                  <ResponsiveImage source={{ uri: Config.APIUrl + val.ImagePath }} initWidth="100" initHeight="100" />
                </TouchableOpacity>
              </View>
              <View style={Styles.bookContainer} >
                  <View style={Styles.titleView} >
                    <Text style={Styles.titleText}>{val.BookName}</Text>
                  </View>
                  <View style={Styles.authorView}>
                    <Text>作者：{val.Author}</Text>
                  </View>
                  <TouchableOpacity style={Styles.iconView}
                  onPress={() => this._collectBook(val)}>
                    <Icon
                      name="library-add"
                      color={val.CanOrder ? 'black' : '#ddd'}
                      size={20} />
                  </TouchableOpacity>
              </View>
            </View>
          })
        }
        </View>
        :
        <BookNoData />}
      </View>
    );
  }
}
