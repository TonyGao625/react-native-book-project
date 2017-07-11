import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation'
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CheckBox from 'react-native-check-box'
import FormButton from './../components-smart/button'
import { getBookBorrowList, selectALL, unSelectALL } from '../actions/book.borrow.action'

@connect((store) => {
  return {
    BookBorrowList: store.bookReducer.BookBorrowList
  }
})

export default class BookBorrow extends Component {
  componentWillMount() {
    //alert(2);
    AsyncStorage.getItem('permission').then((value) => {
        const permission = JSON.parse(value);         
        this.props.dispatch(getBookBorrowList(permission.UserId));
    });
  }
  _onClick = (val) => {
    val.isCheck = true;

  }
  _selectAll=()=>{
    this.props.dispatch(selectALL(this.props.BookBorrowList));
  }
  _unSelectAll=()=>{
    this.props.dispatch(unSelectALL(this.props.BookBorrowList));
  }
  render() {
    return (
      <View>
        <View>
          {
            this.props.BookBorrowList.map((val) => {
              return <View
                key={val.Id}
                style={styles.item}>
                <Text>{val.BookName}</Text>
                  <View style={styles.statusIcon}>
                    {/*<Icon style={styles.icon} 
                      onPress={() => this._backBook(val.Id)}
                      name="keyboard-return" 
                      size={20} 
                      color='red' />
                    <Icon 
                      onPress={() => this._collectBook(val.Id)}
                      name="favorite" 
                      size={20} 
                      color='red' />*/}
                      <Icon 
                      onPress={(val) => {
                        var check=val.checked
                        this.setState({check: true})
                        }}
                      name={val.checked?'check-box':'check-box-outline-blank'}
                      size={20}/>
                  </View>
                {/*<CheckBox
                  style={{ flex: 1, padding: 10 }}
                  onClick={() => val.isCheck == !val.isCheck}
                  isChecked={val.isCheck}
                  leftText={val.BookName}
                />*/}
              </View>
            })
          }
        </View>
       <View style={styles.operation}>
         <FormButton style={styles.operateItem} 
         onPress={this._selectAll}
         title='全选'></FormButton>
         <FormButton style={styles.operateItem} 
         onPress={this._unSelectAll}
         title='撤销'></FormButton>
         <FormButton style={styles.operateItem} 
         title='确定'></FormButton>
       </View>
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
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 15,
    marginRight: 15
  },
  statusIcon: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  icon: {
    marginRight: 10
  },
  operation:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    margin:10
  },
  operateItem:{
    marginRight: 10
  }
});


