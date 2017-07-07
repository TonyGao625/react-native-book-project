import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  Modal
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation'
import { connect } from 'react-redux';
import { getBookList } from '../actions/book.action';
import FormButton from './../components-smart/button'
import Icon from 'react-native-vector-icons/MaterialIcons';

@connect((store) => {
  return {
    BookList: store.bookReducer.BookList
  }
})

export default class BookAll extends Component {
  componentWillMount() {
    this.props.dispatch(getBookList());

  }
  _addBook= () => {
    const { navigate } = this.props.navigation;
    navigate('BookAdd')
  }
  _borrowBook=(id)=>{
    alert(id);

  }
  _collectBook=()=>{

  }
  render() {
    return (
      <View>
        {
            this.props.BookList.map((val) => {
              return <View 
              key={val.Id}
              style={styles.item}>
                <Text>{val.BookName}</Text>
                <View style={styles.statusIcon}>
                  <Icon style={styles.icon} 
                    onPress={() => this._borrowBook(val.Id)}
                    name="library-books" 
                    size={20} 
                    color='pink' />
                  <Icon 
                    onPress={this._collectBook}
                    name="favorite" 
                    size={20} 
                    color='pink' />
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
    height: 40,
    paddingTop:10,
    marginLeft: 15,
    marginRight: 15
  },
  statusIcon:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  icon:{
    marginRight:10
  }
});