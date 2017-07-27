import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    AsyncStorage,
    ScrollView,
    TouchableHighlight,
    Alert,
    TouchableOpacity
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
import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';
import BookNoData from './../components-cell/book-nodata'
import ResponsiveImage from 'react-native-responsive-image';
import moment from 'moment';

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
            sum: 0,
            disable: false
        };
    }
    componentWillMount() {
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
    _onCheck = (data) => {
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
            Toast.info('请选择要还的图书!', 1);
            return;
        }
        var data = {
            BookReturnModelList: BookReturnModelList,
        }
        BookReturnList(data).then(() => {
            Toast.success('还书成功', 1);
            this.props.dispatch(changeData());
            this.setState({
                checkedAll: false,
                sum: 0
            });
        });
    }
    _preventClickTwice() {
        this.setState({ disable: true });
        setTimeout(() => { this.setState({ disable: false }) }, 2000)
    }
    _showDetailBook = (id,CanOrder) => {
        this._preventClickTwice();
        const { navigate } = this.props.navigation;
        navigate('BookDetail', { id: id,CanOrder:CanOrder})
    }
    render() {
        return (
            <View style={Styles.return}>
                <ScrollView>
                    <View style={Styles.container}>
                        {
                        this.props.BookReturnListByUserId.length>0?
                        <View>
                            {
                                this.props.BookReturnListByUserId.map((val) => {
                                    return <View
                                        key={val.Id}
                                        style={Styles.itemContainer}>
                                        <View style={Styles.imageContainer} >
                                            <TouchableOpacity onPress={() => this._showDetailBook(val.BookId, false)}
                                                disabled={this.state.disable}>
                                                <ResponsiveImage source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }} initWidth="100" initHeight="100" />
                                            </TouchableOpacity>
                                        </View>
                                        <View style={Styles.bookContainer} >
                                            <View style={Styles.titleView} >
                                                <Text style={Styles.titleText}>{val.BookName}</Text>
                                            </View>
                                            <View style={Styles.authorView}>
                                                <Text>作者：{val.Author}</Text>
                                            </View>
                                            <View style={Styles.authorView}>
                                                <Text>预定还书日期：{moment(val.NeedReturnDate).format('YYYY-MM-DD')}</Text>
                                            </View>
                                            <TouchableOpacity onPress={() => this._onCheck(val)}
                                                style={Styles.iconView}>
                                                <Icon
                                                    name={val.isCheck ? 'check-circle' : 'radio-button-unchecked'}
                                                    color='black'
                                                    size={20} />
                                                {val.IsOverTime>=0? <Icon
                                                    name='warning'
                                                    color='red'
                                                    size={20} />
                                                    :
                                                    <Text></Text>
                                                }
                                               
                                            </TouchableOpacity>
                                            </View>
                                        </View>
                                })
                            }
                        </View>
                        :
                        <BookNoData />
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



