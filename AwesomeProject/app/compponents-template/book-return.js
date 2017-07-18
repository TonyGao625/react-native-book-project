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
import { getPermission } from '../actions/account.action'
import Styles from './style/book-return'
import { changeData } from '../actions/common.action'

@connect((store) => {
    return {
        BookReturnListByUserId: store.bookReturnReducer.BookReturnListByUserId,
        permission: store.accountReducer.permission,
        Flag: store.commonReducer.Flag
    }
})

export default class BookReturn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkedAll: false,
            sum: 0
        };
    }
    componentWillMount() {
        this.props.dispatch(getPermission());
        this.props.dispatch(GetBookBorrowListByUserId(this.props.permission.UserId));
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.Flag !== nextProps.Flag) {
            this.setState({
                checkedAll: false,
                sum: 0
            });
            this.props.dispatch(GetBookBorrowListByUserId(this.props.permission.UserId));
        }
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
            Alert.alert('', '请选择要还的图书', [], { cancelable: true });
            return;
        }
        var data = {
            BookReturnModelList: BookReturnModelList,
        }
        BookReturnList(data).then(() => {
            Alert.alert('', '借阅成功', [], { cancelable: true });
            this.props.dispatch(changeData());
            this.setState({
                checkedAll: false,
                sum: 0
            });
        });
    }
    render() {
        return (
            <View style={Styles.return}>
                <ScrollView>
                    <View style={Styles.container}>
                        {
                            this.props.BookReturnListByUserId.map((val) => {
                                return <View
                                    key={val.Id}
                                    style={Styles.item}>
                                    <Text style={Styles.title}>{val.BookName}</Text>
                                    <View style={Styles.statusIcon}>
                                        <Icon
                                            onPress={() => this._onClick(val)}
                                            name={val.isCheck ? 'check-circle':'radio-button-unchecked'}
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



