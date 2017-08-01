import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import ResponsiveImage from 'react-native-responsive-image';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Styles from './style/book-borrow-item'
import moment from 'moment';
import Config from '../config/config'
const bookImage = require("./../src/images/book_item.png");

export default class BookItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageUrl: bookImage
        };
    }
    componentDidMount() {
        this.setState({
            imageUrl: {
                uri: Config.APIUrl + this.props.data.ImagePath
            }
        });
    }
    render() {
        var data = this.props.data;
        return (
            <View
                key={data.Id}
                style={Styles.item}>
                <View style={Styles.imageContainer} >
                    <TouchableOpacity onPress={this.props.onShowDetail}>
                        <ResponsiveImage source={this.state.imageUrl} initWidth="100" initHeight="100" />
                    </TouchableOpacity>
                </View>
                <View style={Styles.bookContainer} >
                    <TouchableOpacity onPress={this.props.onSelect}>
                        <View style={{ paddingBottom: 6 }} >
                            <Text style={{ fontWeight: "bold", fontStyle: "italic", fontSize: 15 }}>{data.BookName}</Text>
                        </View>
                        <View style={{ paddingBottom: 6 }}>
                            <Text>作者：{data.Author}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={Styles.statusIcon} >
                    <TouchableOpacity onPress={this.props.onSelect}>
                        <Icon
                            name={data.isCheck ? 'check-circle' : 'radio-button-unchecked'}
                            color='black'
                            size={20} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}


