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
import FormButton from './../components-cell/form-button'
import FormTextField from './../components-cell/form-text-input'
import FormDatePicker from './../components-cell/form-date-picker'
import FormModelPicker from './../components-cell/form-model-picker'
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
import ScrollableTabView, { DefaultTabBar, } from 'react-native-scrollable-tab-view';
import Styles from './style/book-detail-display'
import themes from './../src/themes/themes'

@connect((store) => {
    return {
        BookDetail: store.bookDetailReducer.BookDetail
    }
})

class LightboxView extends Component {
    componentWillMount() {
        this.props.dispatch(getBookById(this.props.id));
    }
    render() {
        const { BookDetail } = this.props;
        return (
            <ScrollableTabView
                style={Styles.container}
                renderTabBar={() => <DefaultTabBar backgroundColor='rgba(255, 255, 255, 0.7)' />}
                tabBarPosition='overlayTop'
                tabBarActiveTextColor ={themes.color}
                tabBarUnderlineStyle ={{backgroundColor:themes.color}}
            >
                <ScrollView 
                style={Styles.containerTab}
                tabLabel='简介'>
                    <View style={Styles.row}>
                        <Lightbox style={Styles.col}>
                            <Image
                                style={Styles.contain}
                                resizeMode="contain"
                                source={{ uri: 'https://www.yayomg.com/wp-content/uploads/2014/04/yayomg-pig-wearing-party-hat.jpg' }}
                            />
                        </Lightbox>
                    </View>
                    <Text style={Styles.title}>{BookDetail.BookName}</Text>
                    <View style={Styles.content}>
                        <View >
                            <View style={Styles.rowDirection} >
                                <Icon
                                    name={'event-note'}
                                    color='black'
                                    size={20} />
                                <Text style={Styles.boldText} >图书介绍：</Text>
                            </View>
                            <Text>{BookDetail.Remark}</Text>
                        </View>
                        <View style={Styles.contentField} >
                            <View style={Styles.rowDirection} >
                                <Icon
                                    name={'person'}
                                    color='black'
                                    size={20} />
                                <Text style={Styles.boldText}>作者：</Text>
                            </View>
                            <Text>{BookDetail.Author}</Text>
                        </View>
                        <View style={Styles.contentField} >
                            <View style={Styles.rowDirection} >
                                <Icon
                                    name={'date-range'}
                                    color='black'
                                    size={20} />
                                <Text style={Styles.boldText} >出版日期：</Text>
                            </View>
                            <Text>{!BookDetail.PublicDate ? "无" : Moment(BookDetail.PublicDate).format('MM/DD/YYYY')}</Text>
                        </View>
                        <View style={Styles.contentField} >
                            <View style={Styles.rowDirection} >
                                <Icon
                                    name={'art-track'}
                                    color='black'
                                    size={20} />
                                <Text style={Styles.boldText} >分类：</Text>
                            </View>
                            <Text>{BookDetail.CategoryName}</Text>
                        </View>
                    </View>
                </ScrollView>
                <ScrollView 
                style={Styles.containerTab}
                tabLabel='借阅记录'>
                    <View style={{ flexDirection: 'row', marginTop: 70 }}>
                        <View style={{ flex: 1, marginLeft: 18, }}>
                            <Text style={Styles.boldText}>借阅起始日</Text>
                        </View>
                        <View style={{ flex: 1 ,}}>
                            <Text style={Styles.boldText}>还书日</Text>
                        </View>
                        <View style={{ flex: 1, marginRight: 0, }}>
                            <Text style={Styles.boldText}>借阅人</Text>
                        </View>
                    </View>

                    {BookDetail.BookBorrowList && BookDetail.BookBorrowList.map((val) => {
                        return <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <View style={{ flex: 1, marginLeft: 18 }}>
                                <Text style={Styles.boldText}>{Moment(val.BorrowDate).format('MM/DD/YYYY')}</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={Styles.boldText}>{!val.ReturnDate ? "未还" : Moment(val.ReturnDate).format('MM/DD/YYYY')}</Text>
                            </View>
                            <View style={{ flex: 1, marginRight: 0 }}>
                                <Text style={Styles.boldText}>{!val.UserName?"":val.UserName}</Text>
                            </View>
                        </View>
                    })}
                </ScrollView>
            </ScrollableTabView>
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