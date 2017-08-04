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
const bookImage = require("./../src/images/no-image.png");

export default class BookItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageUrl: bookImage
        };
    }
    componentDidMount() {
        if (this.props.data.ImagePath != null) {
            this.setState({
                imageUrl: {
                    uri: Config.APIUrl + this.props.data.ImagePath
                }
            });
        }
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
                    <TouchableOpacity style={Styles.bookView}
                        onPress={this.props.onSelect}
                        onLongPress={this.props.onRemoveItem}>
                        <View style={Styles.titleView} >
                            <Text style={Styles.titleText}>{data.ShortBookName}</Text>
                        </View>
                        <View style={Styles.authorView}>
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


