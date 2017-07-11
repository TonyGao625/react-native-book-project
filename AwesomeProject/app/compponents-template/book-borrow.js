import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    AsyncStorage,
    ScrollView,
    TouchableHighlight,
    Alert
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation'
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CheckBox from 'react-native-check-box'
import FormButton from './../components-smart/button'
import { getBookBorrowList, BookBorrowList, selectALL, unSelectALL } from '../actions/book.borrow.action'

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
        sum:0,
      };
    }
    componentWillMount() {
        AsyncStorage.getItem('permission').then((value) => {
            const permission = JSON.parse(value);
            this.props.dispatch(getBookBorrowList(permission.UserId));
        });
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
      if(!this.state.checkedAll){//select all
        this.setState({
          sum: this.props.BookBorrowList.length
        });
        this.props.dispatch(selectALL(this.props.BookBorrowList));
      }else{
        this.setState({//select all
          sum: 0
        });
        this.props.dispatch(unSelectALL(this.props.BookBorrowList));
      }
    }
    _onBorrowBook=()=>{
      var BookCollectionList=this.props.BookBorrowList.filter(x=>x.isCheck==true);
      if(BookCollectionList.length<1){
        Alert.alert('', '请选择要借阅的图书',[]);
        return;
      }
      
      AsyncStorage.getItem('permission').then((value) => {
          const permission = JSON.parse(value);

          var data={
            BookCollectionList:BookCollectionList,
            UserId:permission.UserId,
            BorrowDate:new Date()
          }
          BookBorrowList(data).then(function(item){
             Alert.alert('', '借阅成功',[]);
             this.props.dispatch(getBookBorrowList(permission.UserId));
          });
      }); 
    }
    render() {
        return (
            <View>
                <View style={styles.container}>
                    {
                        this.props.BookBorrowList.map((val) => {
                        return <View 
                        key={val.Id}
                        style={styles.item}>
                            <Text style={styles.title}
                            onPress={() => this._showDetailBook(val.Id)}>{val.BookName}</Text>
                            <View style={styles.statusIcon}>
                                <Icon 
                                onPress={() => this._onClick(val)}
                                name={val.isCheck?'check-box':'check-box-outline-blank'}
                                color='black'
                                size={20} />
                            </View>
                        </View>
                        })
                    }
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
                      <TouchableHighlight>
<Text>总计：{this.state.sum}</Text>
                      </TouchableHighlight>
                      
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


