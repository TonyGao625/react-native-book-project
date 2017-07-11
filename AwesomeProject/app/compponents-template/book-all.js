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
import FormButton from './../components-smart/button'
import Icon from 'react-native-vector-icons/MaterialIcons';

@connect((store) => {
  return {
    BookList: store.bookReducer.BookList
  }
})

export default class BookAll extends Component {
  componentWillMount() {
    //alert(1);
    this.props.dispatch(getBookList());
    
  }
  _addBook= () => {
    const { navigate } = this.props.navigation;
    navigate('BookAdd')
  }
  _borrowBook=(id)=>{
    AsyncStorage.getItem('permission').then((value) => {
      const permission = JSON.parse(value);
      
      var data={
          BookBorrowModel:{
            BookId:id,
            UserId:permission.UserId,
            BorrowDate: new Date()
          }
        };
      borrowBook(data).then(function(){
        alert("借阅成功");
      });
    });
  }
  _collectBook=(id)=>{
    AsyncStorage.getItem('permission').then((value) => {
      const permission = JSON.parse(value);
      
      var data={
          BookCollectionModel:{
            BookId:id,
            UserId:permission.UserId,
            CollectionDate: new Date()
          }
        };
      collectBook(data).then(function(){
        alert("收藏成功");
      });
    });
  }
 _showDetailBook=(id)=>{
    const { navigate } = this.props.navigation;
    navigate('BookAdd')
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
                  {/*<Icon style={styles.icon} 
                    onPress={() => this._showDetailBook(val.Id)}
                    name="library-books" 
                    size={20} />*/}
                      <Icon 
                    onPress={() => this._collectBook(val.Id)}
                    name="add-shopping-cart" 
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
    paddingTop:10,
    paddingBottom:10,
    marginLeft: 15,
    marginRight: 15
  },
  title:{
    marginRight:80
  },
  statusIcon:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width:200
  },
  icon:{
    marginRight:10
  }
});