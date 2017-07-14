import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  Modal,
  AsyncStorage,
  TouchableHighlight
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation'
import { connect } from 'react-redux';
import { getBookList, borrowBook, collectBook } from '../actions/book.action';
import FormButton from './../components-cell/form-button'
import Icon from 'react-native-vector-icons/MaterialIcons';
import storage from 'store2';

@connect((store) => {
  return {
    BookList: store.bookReducer.BookList
  }
})

export default class BookAll extends Component {
  componentWillMount() {
    var BookName = storage.session('BookName');
    var CategoryId = storage.session('CategoryId');
    var data = {
      BookName: BookName == null?"":BookName,
      CategoryId: CategoryId==null?0:CategoryId
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
        alert("添加借阅车成功");
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
              style={styles.item}>
              <Text style={styles.title}
                onPress={() => this._showDetailBook(val.Id)}>{val.BookName}</Text>
              <View style={styles.statusIcon}>
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

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 15,
    marginRight: 15
  },
  title: {
    marginRight: 80
  },
  statusIcon: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: 200
  },
  icon: {
    marginRight: 10
  }
});