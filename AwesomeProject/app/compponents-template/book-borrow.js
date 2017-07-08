import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation'
import { connect } from 'react-redux';
import { getBookBorrowList } from '../actions/book.action';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CheckBox from 'react-native-check-box'

@connect((store) => {
  return {
    BookBorrowList: store.bookReducer.BookBorrowList
  }
})

export default class BookBorrow extends Component {
  componentWillMount() {
    this.props.dispatch(getBookBorrowList());
  }
  _onClick=(val)=>{
    val.isCheck=true;
  }
  render() {
    return (
      <View>
        {
            this.props.BookBorrowList.map((val) => {
              return <View 
              key={val.Id}
              style={styles.item}>
                {/*<Text>{val.BookName}</Text>
                <View style={styles.statusIcon}>
                  <Icon style={styles.icon} 
                    onPress={() => this._backBook(val.Id)}
                    name="keyboard-return" 
                    size={20} 
                    color='red' />
                  <Icon 
                    onPress={() => this._collectBook(val.Id)}
                    name="favorite" 
                    size={20} 
                    color='red' />
                </View>*/}
                <CheckBox
                  style={{flex: 1, padding: 10}}
                  onClick={()=>val.isCheck==!val.isCheck}
                  isChecked={val.isCheck}
                  leftText={val.BookName}
                />
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
    paddingBottom:10,
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


