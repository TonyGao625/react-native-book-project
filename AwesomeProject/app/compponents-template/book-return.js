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
import FormButton from './../components-cell/form-button'
import { GetBookBorrowListByUserId, BookReturnList } from '../actions/book.return.action'
import { selectALL, unSelectALL } from '../actions/book.borrow.action';
import BookOperation from '../components-cell/book-operation';
@connect((store) => {
    return {
        BookReturnListByUserId: store.bookReturnReducer.BookReturnListByUserId,
        permission: store.accountReducer.permission,
        Flag:store.commonReducer.Flag
    }
})

export default class BookReturn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkedAll: false,
            sum: 0,
        };
    }
    componentWillMount() {
        this.props.dispatch(getPermission());
    }
    componentWillReceiveProps(){
        this.props.dispatch(GetBookBorrowListByUserId(this.props.permission.UserId));
        //alert("return");
    }
    _onClick = (data) => {
        data.isCheck = !data.isCheck;
        if (data.isCheck) {
            this.setState({
                sum: this.state.sum + 1
            });
        } else {
            this.setState({
                sum: this.state.sum - 1
            });
        }
    }
    _onCheckAll = () => {
        if (!this.state.checkedAll) {
            this.setState({ checkedAll: true, sum: this.props.BookReturnListByUserId.length })
            this.props.dispatch(selectALL(this.props.BookReturnListByUserId));
        } else {
            this.setState({ checkedAll: false, sum: 0 });
            this.props.dispatch(unSelectALL(this.props.BookReturnListByUserId));
        }

    }
    _onReturnBook = () => {
        var BookReturnModelList = this.props.BookReturnListByUserId.filter(x => x.isCheck == true);
        if (BookReturnModelList.length < 1) {
            Alert.alert('', '请选择要还的图书', [],{cancelable: true});
            return;
        }
        var data = {
            BookReturnModelList: BookReturnModelList,
        }
        BookReturnList(data).then(() => {
            Alert.alert('', '借阅成功', [],{cancelable: true});
            AsyncStorage.getItem('permission').then((value) => {
                const permission = JSON.parse(value);
                this.props.dispatch(GetBookBorrowListByUserId(permission.UserId));
                this.setState({
                    checkedAll: false,
                    sum: 0
                });
            });
        });
    }
    render() {
        return (
            <View style={styles.return}>
                <ScrollView>
                    <View style={styles.container}>
                        {
                            this.props.BookReturnListByUserId.map((val) => {
                                return <View
                                    key={val.Id}
                                    style={styles.item}>
                                    <Text style={styles.title}>{val.BookName}</Text>
                                    <View style={styles.statusIcon}>
                                        <Icon
                                            onPress={() => this._onClick(val)}
                                            name={val.isCheck ? 'check-box' : 'check-box-outline-blank'}
                                            color='black'
                                            size={20} />
                                    </View>
                                </View>
                            })
                        }
                    </View>
                </ScrollView>
                <BookOperation
                    isCheckAll={this.state.checkedAll}
                    total={this.state.sum}
                    onCheckAll={this._onCheckAll}
                    onBorrowBook={this._onReturnBook}
                    lable={'还书'} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    return: {
        flex: 1
    },
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


