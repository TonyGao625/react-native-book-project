import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    AsyncStorage,
    ScrollView
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation'
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CheckBox from 'react-native-check-box'
import FormButton from './../components-smart/button'
import { getBookBorrowList, selectALL, unSelectALL } from '../actions/book.borrow.action'

@connect((store) => {
    return {
        BookBorrowList: store.bookBorrowReducer.BookBorrowList
    }
})

export default class BookBorrow extends Component {
    constructor(props) {
      super(props);
      this.state = {
        checkedAll: false,
        sum:0
      };
    }
    componentWillMount() {
        AsyncStorage.getItem('permission').then((value) => {
            const permission = JSON.parse(value);
            this.props.dispatch(getBookBorrowList(permission.UserId));
        });
    }
    renderView() {
        if (!this.props.BookBorrowList || this.props.BookBorrowList.length === 0) {
            return;
        }
        var len = this.props.BookBorrowList.length;
        var views = [];
        for (var i = 0; i < len; i++) {
            views.push(
                <View key={i}>
                    <View style={styles.item}>
                        {this.renderCheckBox(this.props.BookBorrowList[i])}
                    </View>
                    <View style={styles.line} />
                </View>
            )
        }
        return views;
    }
    renderCheckBox(data) {
        var leftText = data.BookName;
        return (
            <CheckBox
                style={{ flex: 1, padding: 10}}
                onClick={() => this._onClick(data)}
                isChecked={data.isCheck}
                leftText={leftText}
            />);
    }
    _onClick = (data) => {
        data.isCheck = !data.isCheck;
        if(data.isCheck){
          this.setState({
            sum: this.state.sum + 1
          });
        }else{
          this.setState({
            sum: this.state.sum - 1
          });
        }
    }
    _onCheckAll= () => {
      this.setState({
        checkedAll: !this.state.checkedAll
      });
      if(!this.state.checkedAll){
        this.setState({
          sum: this.props.BookBorrowList.length
        });
      }else{
        this.setState({
          sum: 0
        });
      }
    }
    _onBorrowBook=()=>{
       
    }
    render() {
        return (
            <View>
                <View style={styles.container}>
                    <ScrollView>
                        {this.renderView()}
                    </ScrollView>
                </View>
                <View style={styles.bottomOperation}>
                  <View style={styles.operation}>
                    <View style={styles.operateItem}>
                      <CheckBox
                          style={{ flex: 1, padding: 10 }}
                          onClick={() => this._onCheckAll()}
                          isChecked={this.state.checkedAll}
                          rightText='全选'
                        />
                    </View>
                    <View style={styles.operateItem}>
                      <Text>总计：{this.state.sum}</Text>
                    </View>
                    <View style={styles.operateItem}>
                      <FormButton 
                      onPress={this._onBorrowBook}
                      title='借阅'
                      color='pink'></FormButton>
                    </View>
                  </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f2f2',
    },
    item: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    line: {
        flex: 1,
        height: 0.3,
    },
    bottomOperation:{
      position:'absolute',
      bottom:0
    },
    operation:{
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin:10
    },
    operateItem:{
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
      backgroundColor:'pink',
      width:'33%'
    }
});


