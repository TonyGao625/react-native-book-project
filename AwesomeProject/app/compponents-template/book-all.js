import React, { Component } from 'react';
import {
  Text,
  View,
  ListView,
  AsyncStorage,
  TouchableHighlight,
  Alert,
  TouchableOpacity,
  RefreshControl,
  ActivityIndicator
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation'
import { connect } from 'react-redux';
import { getBookList, borrowBook, collectBook } from '../actions/book.action';
import { GetBookBorrowListByUserId } from '../actions/book.return.action'
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
    BooKlistTotalPage: store.bookReducer.BooKlistTotalPage,
    Flag: store.commonReducer.Flag,
    permission: store.accountReducer.permission
  }
})

export default class BookAll extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows([]),
      isRefreshing: false,
      currentPage: 1,
      NoMoreData: false,
      disable: false
    };
  }
  componentWillMount() {
    this._search(this.props.permission.UserId);
    this.props.dispatch(GetBookBorrowListByUserId(this.props.permission.UserId));
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.Flag !== nextProps.Flag) {
      this._search(this.props.permission.UserId);
    }
  }
  _search = (userId, page) => {
    var BookName = storage.session('BookName');
    var CategoryId = storage.session('CategoryId');
    var data = {
      UserId: userId,
      BookName: BookName == null ? "" : BookName,
      CategoryId: CategoryId == null ? 0 : CategoryId,
      Page: page ? page : 1
    };
    getBookList(data).then((res) => {
      const ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 });
      var dataSource = ds.cloneWithRows(res.payload);
      this.props.dispatch({
        type: 'GET_BOOK_LIST',
        payload: res.payload,
        pageTotal: res.pageTotal
      })
      this.setState({
        dataSource: dataSource,
        NoMoreData: false,
        currentPage: 1
      })
    });
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
  _showDetailBook = (id, CanOrder) => {
    this._preventClickTwice();
    const { navigate } = this.props.navigation;
    navigate('BookDetail', { id: id, CanOrder: CanOrder, UserId: this.props.permission.UserId })
  }
  _onRefresh = () => {
    this._search(this.props.permission.UserId);
  }
  _onEndReached = () => {
    if (this.state.currentPage < this.props.BooKlistTotalPage - 1) {
      this.setState({
        currentPage: this.state.currentPage + 1
      });
      let page;
      if (this.state.currentPage === 1) {
        page = 2;
        this.setState({ currentPage: 2 })
      } else {
        page = this.state.currentPage + 1
      }
      var BookName = storage.session('BookName');
      var CategoryId = storage.session('CategoryId');
      var data = {
        UserId: this.props.permission.UserId,
        BookName: BookName == null ? "" : BookName,
        CategoryId: CategoryId == null ? 0 : CategoryId,
        Page: page
      };
      getBookList(data).then((res) => {
        const data = this.props.BookList;
        const newData = res.payload;
        newData.map((item, index) => data.push(item));
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(this.props.BookList)
        });
      });
    } else {
      this.setState({
        NoMoreData: true
      })
    }
  }
  _renderRow(rowData) {
    return <View style={Styles.itemContainer} >
      <View style={Styles.imageContainer} >
        <TouchableOpacity onPress={this._showDetailBook.bind(this, rowData.Id, rowData.CanOrder)}
          disabled={this.state.disable}>
          <ResponsiveImage source={{ uri: Config.APIUrl + rowData.ImagePath }} initWidth="100" initHeight="100" />
        </TouchableOpacity>
      </View>
      <View style={Styles.bookContainer} >
        <View style={{ paddingBottom: 6 }} >
          <Text style={{ fontWeight: "bold", fontStyle: "italic", fontSize: 15 }}>{rowData.BookName}</Text>
        </View>
        <View style={{ paddingBottom: 6 }}>
          <Text>作者：{rowData.Author}</Text>
        </View>
      </View>
      <View style={Styles.statusIcon} >
        <TouchableOpacity onPress={this._collectBook.bind(this, rowData)}>
          <Icon
            name="library-add"
            color={rowData.CanOrder ? 'black' : '#ddd'}
            size={25} />
        </TouchableOpacity>
      </View>
    </View>
  }
  render() {
    return (
      <ListView
        style={{ flex: 1 }}
        dataSource={this.state.dataSource}
        renderRow={this._renderRow.bind(this)}
        renderFooter={() => <View style={{ height: 50 }}>{this.state.NoMoreData ?
          <View style={{ flex: 1, flexDirection: "row", justifyContent: "center", alignItems: 'center' }} ><Text style={{ color: 'red', fontSize: 17 }} >没有图书啦。。。</Text></View> : <ProgressBar />}</View>}
        onEndReached={this._onEndReached}
        onEndReachedThreshold={10}
        enableEmptySections={true}
        pageSize={10}
        refreshControl={
          <RefreshControl
            refreshing={this.state.isRefreshing}
            onRefresh={this._onRefresh}
            colors={['#EA0000']}
            tintColor="white"
            title="loading..."
            titleColor="white"
            progressBackgroundColor="white"
          />
        }
      />
    );
  }
}

const ProgressBar = () => (
  <View style={{
    flex: 1, justifyContent: 'center'
  }}>
    <ActivityIndicator size="large" color={"#EA0000"} />
  </View>
);