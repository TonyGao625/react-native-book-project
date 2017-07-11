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
    renderView() {
        if (!this.props.BookReturnListByUserId || this.props.BookReturnListByUserId.length === 0) {
            return;
        }
        var len = this.props.BookReturnListByUserId.length;
        var views = [];
        for (var i = 0; i < len; i++) {
            views.push(
                <View key={i}>
                    <View style={styles.item}>
                        {this.renderCheckBox(this.props.BookReturnListByUserId[i])}
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
                style={{ flex: 1, padding: 10 }}
                onClick={() => this._onClick(data)}
                isChecked={data.isCheck}
                leftText={leftText}
            />);
    }
    _onClick = (data) => {
        data.isCheck = !data.isCheck;
    }
    _selectAll = () => {
        this.props.dispatch(selectALL(this.props.BookBorrowList));

    }
    _unSelectAll = () => {

    }
    render() {
        return (
            <View>
                <View style={styles.container}>
                    <ScrollView>
                        {this.renderView()}
                    </ScrollView>
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
    container: {
        flex: 1,
        backgroundColor: '#f3f2f2',
    },
    item: {
        flexDirection: 'row',
    },
    line: {
        flex: 1,
        height: 0.3,
        backgroundColor: 'darkgray',
    },
});


