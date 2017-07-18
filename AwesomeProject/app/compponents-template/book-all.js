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
    var BookName = storage.session('BookName');
    var CategoryId = storage.session('CategoryId');
    var data = {
      BookName: BookName == null ? "" : BookName,
      CategoryId: CategoryId == null ? 0 : CategoryId
    };
    this.props.dispatch(getBookList(data));
  }
  componentWillReceiveProps(nextProps) {
    
    if (this.props.Flag !== nextProps.Flag) {
      var BookName = storage.session('BookName');
      var CategoryId = storage.session('CategoryId');
      var data = {
        BookName: BookName == null ? "" : BookName,
        CategoryId: CategoryId == null ? 0 : CategoryId
      };
      this.props.dispatch(getBookList(data));
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
    var data = {
      BookCollectionModel: {
        BookId: val.Id,
        UserId: this.props.permission.UserId,
        CollectionDate: new Date()
      }
    };
    collectBook(data).then(() => {
      Alert.alert('', '添加到借阅单成功', [], { cancelable: true });
      this.props.dispatch(changeData());
    });
  }
  _preventClickTwice() {
    this.setState({ disable: true });
    setTimeout(() => { this.setState({ disable: false }) }, 2000)
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
            return <View
              key={val.Id}
              style={Styles.item}>
              <TouchableOpacity onPress={() => this._showDetailBook(val.Id)} disabled={this.state.disable}>
                <Text style={styles.title}
                >{val.BookName}</Text>
              </TouchableOpacity>
              <View style={Styles.statusIcon}>
                <Icon
                  onPress={() => this._collectBook(val)}
                  name="library-add"
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
