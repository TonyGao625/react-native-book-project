import React, { Component } from 'react';
import {
    AppRegistry,
    Dimensions,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    View,
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components'
import { StackNavigator, TabNavigator } from 'react-navigation'
import { connect } from 'react-redux';
import FormButton from './../components-smart/button'
import FormTextField from './../components-smart/text-input'
import FormDatePicker from './../components-smart/date-picker'
import FormModelPicker from './../components-smart/model-picker'
import ModalPicker from 'react-native-modal-picker'
import { batchActions, enableBatching } from 'redux-batched-actions';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ResponsiveImage from 'react-native-responsive-image';
import Lightbox from 'react-native-lightbox';
import Carousel from 'react-native-looped-carousel';
import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';
import { getBookById } from '../actions/book.detail.action';
import Moment from 'moment';
var WINDOW_WIDTH = Dimensions.get('window').width;
var BASE_PADDING = 10;

@connect((store) => {
    return {
        BookDetail: store.bookDetailReducer.BookDetail
    }
})

class LightboxView extends Component {
    componentWillMount() {
        this.props.dispatch(getBookById(this.props.id));
    }
    state = {
        profileCollapsed: true,
        borrowHistoryCollapsed: true
    };

    _toggleProfileExpanded = () => {
        this.setState({ profileCollapsed: !this.state.profileCollapsed });
    }
    _toggleBorrowHistoryExpanded = () => {
        this.setState({ borrowHistoryCollapsed: !this.state.borrowHistoryCollapsed });
    }
    render() {
        const { BookDetail } = this.props;
        console.log(BookDetail);
        return (
            <ScrollView style={styles.container}>
                <View style={styles.row}>
                    {/* <Lightbox style={styles.col} navigator={this.props.navigator}>
                        <Image
                            style={styles.contain}
                            resizeMode="contain"
                            source={{ uri: 'https://www.yayomg.com/wp-content/uploads/2014/04/yayomg-pig-wearing-party-hat.jpg' }}
                        />
                    </Lightbox> */}
                    <Lightbox style={styles.col}>
                        <Image
                            style={styles.contain}
                            resizeMode="contain"
                            source={{ uri: 'https://www.yayomg.com/wp-content/uploads/2014/04/yayomg-pig-wearing-party-hat.jpg' }}
                        />
                    </Lightbox>
                </View>
                <Text style={styles.title}>{BookDetail.BookName}</Text>
                <TouchableHighlight onPress={this._toggleProfileExpanded}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>简介</Text>
                    </View>
                </TouchableHighlight>
                <Collapsible collapsed={this.state.profileCollapsed} align="center">
                    <View style={styles.content}>
                        <View style={styles.contentField} >
                            <View style={styles.rowDirection} >
                                <Icon
                                    name={'event-note'}
                                    color='black'
                                    size={20} />
                                <Text style={styles.boldText} >图书介绍：</Text>
                            </View>
                            <Text>{BookDetail.Remark}</Text>
                        </View>
                        <View style={styles.contentField} >
                            <View style={styles.rowDirection} >
                                <Icon
                                    name={'person'}
                                    color='black'
                                    size={20} />
                                <Text style={styles.boldText}>作者：</Text>
                            </View>
                            <Text>{BookDetail.Author}</Text>
                        </View>
                        <View style={styles.contentField} >
                            <View style={styles.rowDirection} >
                                <Icon
                                    name={'date-range'}
                                    color='black'
                                    size={20} />
                                <Text style={styles.boldText} >出版日期：</Text>
                            </View>
                            <Text>{!BookDetail.PublicDate ? "无" : Moment(BookDetail.PublicDate).format('MM/DD/YYYY')}</Text>
                        </View>
                        <View style={styles.contentField} >
                            <View style={styles.rowDirection} >
                                <Icon
                                    name={'art-track'}
                                    color='black'
                                    size={20} />
                                <Text style={styles.boldText} >分类：</Text>
                            </View>
                            <Text>{BookDetail.CategoryName}</Text>
                        </View>
                    </View>
                </Collapsible>
                <TouchableHighlight onPress={this._toggleBorrowHistoryExpanded}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>借阅记录</Text>
                    </View>
                </TouchableHighlight>
                <Collapsible collapsed={this.state.borrowHistoryCollapsed} align="center">
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <View style={{ flex: 1, marginLeft: 18 }}>
                            <Text style={styles.boldText}>借阅起始日</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.boldText}>还书日</Text>
                        </View>
                        <View style={{ flex: 1, marginRight: 0 }}>
                            <Text style={styles.boldText}>借阅人</Text>
                        </View>
                    </View>

                    {BookDetail.BookBorrowList && BookDetail.BookBorrowList.map((val) => {
                        return <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <View style={{ flex: 1, marginLeft: 18 }}>
                                <Text style={styles.boldText}>{Moment(val.BorrowDate).format('MM/DD/YYYY')}</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={styles.boldText}>{!val.ReturnDate ? "未还" : Moment(val.ReturnDate).format('MM/DD/YYYY')}</Text>
                            </View>
                            <View style={{ flex: 1, marginRight: 0 }}>
                                <Text style={styles.boldText}>借阅人</Text>
                            </View>
                        </View>
                    })}
                    {/* {BookDetail.BookBorrowList? <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <View style={{ flex: 1, marginLeft: 18 }}>
                            <Text style={styles.boldText}>无记录....</Text>
                        </View>
                    </View> : <Text>""</Text>
                    } */}
                </Collapsible>
            </ScrollView>
        );
    }
}

export default class BookDetailDisplays extends Component {
    renderScene = (route, navigator) => {
        var Component = route.component;
        return (
            <Component navigator={navigator} id={this.props.id} route={route} {...route.passProps} />
        );
    }

    render() {
        return (
            <Navigator
                ref="navigator"
                style={styles.navigator}
                renderScene={this.renderScene}
                initialRoute={{
                    component: LightboxView,
                }}
            />
        );
    }
}

const styles = StyleSheet.create({
    rowDirection: {
        flexDirection: 'row'
    },
    boldText: {
        fontWeight: "bold"
    },
    contentField: {
        marginTop: 12
    },
    navigator: {
        flex: 1,
    },
    container: {
        paddingHorizontal: BASE_PADDING,
    },
    closeButton: {
        color: 'white',
        borderWidth: 1,
        borderColor: 'white',
        padding: 8,
        borderRadius: 3,
        textAlign: 'center',
        margin: 10,
        alignSelf: 'flex-end',
    },
    customHeaderBox: {
        height: 150,
        backgroundColor: '#6C7A89',
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        marginLeft: -BASE_PADDING,
        marginRight: -BASE_PADDING,
        marginTop: 10
    },
    col: {
        flex: 1,
    },
    square: {
        width: WINDOW_WIDTH / 2,
        height: WINDOW_WIDTH / 2,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    squareFirst: {
        backgroundColor: '#C0392B',
    },
    squareSecond: {
        backgroundColor: '#019875',
    },
    squareText: {
        textAlign: 'center',
        color: 'white',
    },
    carousel: {
        height: WINDOW_WIDTH - BASE_PADDING * 2,
        width: WINDOW_WIDTH - BASE_PADDING * 2,
        backgroundColor: 'white',
    },
    contain: {
        flex: 1,
        height: 150,
    },
    text: {
        marginVertical: BASE_PADDING * 2,
    },
    title: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: '300',
        marginBottom: 20,
    },
    header: {
        backgroundColor: '#F5FCFF',
        padding: 10,
    },
    headerText: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '500',
    },
    content: {
        padding: 20,
        backgroundColor: '#fff',
    },
    active: {
        backgroundColor: 'rgba(255,255,255,1)',
    },
    inactive: {
        backgroundColor: 'rgba(245,252,255,1)',
    },
    selectors: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    selector: {
        backgroundColor: '#F5FCFF',
        padding: 10,
    },
    activeSelector: {
        fontWeight: 'bold',
    },
    selectTitle: {
        fontSize: 14,
        fontWeight: '500',
        padding: 10,
    },
});