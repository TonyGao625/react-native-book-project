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
import storage from 'store2';
import { changeData } from '../actions/common.action'
import { getPermission } from '../actions/account.action'
import Styles from './style/book-all'
import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';
import BookNoData from './../components-cell/book-nodata'
import BookItem from './../components-cell/book-all-item'

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
    this._search();

    //get need book return item count
    this.props.dispatch(GetBookBorrowListByUserId(this.props.permission.UserId));
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.Flag !== nextProps.Flag) {
      this._search();
    }
  }
  _search = (page) => {
    var BookName = storage.session('BookName');
    var CategoryId = storage.session('CategoryId');
    var data = {
      UserId: this.props.permission.UserId,
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
    //this._preventClickTwice();
    
    const { navigate } = this.props.navigation;
    navigate('BookDetail', { id: id, CanOrder: CanOrder, UserId: this.props.permission.UserId })
  }
  _onRefresh = () => {
    this._search();
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
    return <BookItem
      onShowDetail={() => this._showDetailBook(rowData.Id, rowData.CanOrder)}
      onSelect={() => this._collectBook(rowData)}
      data={rowData} />
  }
  render() {
    return (
      <ListView
        style={Styles.all}
        dataSource={this.state.dataSource}
        renderRow={this._renderRow.bind(this)}
        renderFooter={() =>
          <View style={Styles.bookFooter}>
            {this.state.NoMoreData ?
              <View style={Styles.noBookView} >
                <Text style={Styles.noBookText} >没有图书啦。。。</Text></View>
              :
              <ProgressBar />}
          </View>
        }
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