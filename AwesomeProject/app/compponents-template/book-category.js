import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    Modal,
    AsyncStorage,
    TouchableHighlight,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation'
import { connect } from 'react-redux';
import { getBookCategoryList } from '../actions/book.action';
import FormButton from './../components-smart/button'
import Icon from 'react-native-vector-icons/MaterialIcons';
import storage from 'store2';

@connect((store) => {
    return {
        BookCategoryList: store.bookReducer.BookCategoryList
    }
})

export default class BookCategory extends Component {
    componentWillMount() {
        this.props.dispatch(getBookCategoryList());
    }
    _onSelectCategory = (id) => {
        storage.session('CategoryId', id);
        const { navigate } = this.props.navigation;
        navigate('Main');
    }
    render() {
        return (
            <ScrollView>
                {
                    this.props.BookCategoryList.map((val) => {
                        return <TouchableOpacity
                            key={val.Id}
                            activeOpacity={.5}
                            onPress={()=>this._onSelectCategory(val.Id)}>
                            <View style={styles.item}>
                                <View style={styles.button}>
                                    <Text style={styles.buttonText}>{val.Name}</Text>
                                </View>
                            </View> 
                        </TouchableOpacity>
                    })
                }
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#43A047',
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft: 15,
        marginRight: 15
    },
    button: {
        alignItems: "center",
        justifyContent: "center",
    },
});