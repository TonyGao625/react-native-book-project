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
import { GetBookBorrowListByUserId } from '../actions/book.return.action'

@connect((store) => {
    return {
        BookReturnListByUserId: store.bookReturnReducer.BookReturnListByUserId
    }
})

export default class BookBorrow extends Component {
    componentWillMount() {
        AsyncStorage.getItem('permission').then((value) => {
            const permission = JSON.parse(value);           
            this.props.dispatch(GetBookBorrowListByUserId(permission.UserId));
        });
    }
    //   _onClick = (val) => {
    //     val.isCheck = true;
    //   }
    //   _selectAll=()=>{
    //     this.props.dispatch(selectALL(this.props.BookBorrowList));
    //     alert(this.props.BookBorrowList[1].checked)
    //   }
    //   _unSelectAll=()=>{
    //     alert(2);
    //   }
    render() {
        console.log(this.props.BookReturnListByUserId);
        return (
            <View>
                <View>
                    {
                        this.props.BookReturnListByUserId.map((val) => {
                            return <View
                                key={val.Id}
                                style={styles.item}>
                                <Text>{val.BookName}</Text>
                                <View style={styles.statusIcon}>
                                    <Icon
                                        onPress={(val) => {
                                            var check = val.checked
                                            this.setState({ check: true })
                                        }}
                                        name={val.checked ? 'check-box' : 'check-box-outline-blank'}
                                        size={20} />
                                </View>
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
    operation: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        margin: 10
    },
    operateItem: {
        marginRight: 10
    }
});


