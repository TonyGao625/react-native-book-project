import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import ResponsiveImage from 'react-native-responsive-image';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Styles from './style/book-return-item'
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
        style={Styles.itemContainer}>
        <View style={Styles.imageContainer} >
          <TouchableOpacity onPress={this.props.onShowDetail}>
            <ResponsiveImage source={this.state.imageUrl} initWidth="100" initHeight="100" />
          </TouchableOpacity>
        </View>
        <View style={Styles.bookContainer}>
          <TouchableOpacity onPress={this.props.onSelect}>
            <View style={Styles.titleView} >
              <Text style={Styles.titleText}>{data.BookName}</Text>
            </View>
            <View style={Styles.dateView}>
              <Text>预定还书日期：{moment(data.NeedReturnDate).format('YYYY-MM-DD')}</Text>
              {
                data.IsOverTime > 0 ?
                  <View style={Styles.delayView}>
                    <Icon
                      name='warning'
                      color='red'
                      size={20} />
                    <Text>已延迟{data.IsOverTime}天</Text>
                  </View>
                  :
                  <Text></Text>
              }
            </View>
          </TouchableOpacity>
        </View>
        <View style={Styles.IconContainer} >
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


