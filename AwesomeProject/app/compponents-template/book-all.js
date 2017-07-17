import React, { Component } from 'react';
import {
  Text,
  View,
  ListView,
  AsyncStorage,
  TouchableHighlight,
  Alert
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
      initData: false,
    };
  }
  componentWillMount() {
    this.props.dispatch(getPermission());
  }
  componentWillReceiveProps() {
    if (!this.state.initData) {
      var BookName = storage.session('BookName');
      var CategoryId = storage.session('CategoryId');
      var data = {
        BookName: BookName == null ? "" : BookName,
        CategoryId: CategoryId == null ? 0 : CategoryId
      };
      this.props.dispatch(getBookList(data));

      this.setState({
        initData: true
      });
    }
  }
  _addBook = () => {
    const { navigate } = this.props.navigation;
    navigate('BookAdd')
  }
  _collectBook = (val) => {
    if (!val.CanOrder) {
      return;
    }

    AsyncStorage.getItem('permission').then((value) => {
      const permission = JSON.parse(value);
      var data = {
        BookCollectionModel: {
          BookId: val.Id,
          UserId: permission.UserId,
          CollectionDate: new Date()
        }
      };
      collectBook(data).then(() => {
        Alert.alert('', '添加到借阅车成功', [], { cancelable: true });
        this.props.dispatch(changeData());
      });
    });
  }
  _showDetailBook = (id) => {
    const { navigate } = this.props.navigation;
    navigate('BookDetail', { id: id })
  }
  render() {
    return (
      <View>
        {
          this.props.BookList.map((val) => {
            return <View
              key={val.Id}
              style={Styles.item}>
              <Text style={Styles.title}
                onPress={() => this._showDetailBook(val.Id)}>{val.BookName}</Text>
              <View style={Styles.statusIcon}>
                <Icon
                  onPress={() => this._collectBook(val)}
                  name="add-shopping-cart"
                  color={val.CanOrder ? 'black' : '#ddd'}
                  size={20} />
              </View>
            </View>
          })
        }
      </View>
    );
  }
}
