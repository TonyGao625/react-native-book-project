import React, { Component } from 'react';
import { AsyncStorage, ScrollView, StyleSheet, View, TouchableHighlight} from 'react-native';
import BookList from './../compponents-template/book-all'
import Icon from 'react-native-vector-icons/MaterialIcons';
import MainAdd from './../compponents-template/main-add';
import FormTextInput from '../components-smart/text-input'

class BookSearchText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookName: ''
    };
  }
  _onFocusSearch=(val)=>{
    const { navigate } = this.props.navigation;
    navigate('Search');
  }
  render() {
    return (
      <View style={{
            flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop:10,
                marginBottom:-10
          }}>
          <Icon 
            style={{marginLeft:10, marginBottom:20}}
            name="crop-free" 
            size={25}
            color='#43A047'/>
          <FormTextInput 
            onFocus={this._onFocusSearch}
            placeholder='search'/>
      </View>
    );
  }
}

export default class BookAll extends Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarLabel: '全部',
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name="apps"
        size={20}
        style={[{ tintColor: tintColor }]}
        color='white' />
    ),
    headerTitle: <BookSearchText navigation={navigation}/>,
    headerRight: 
      <TouchableHighlight>
          <Icon 
            style={{marginRight:10}}
            name="dehaze" 
            size={20}/>
      </TouchableHighlight>
    });

  componentWillMount() {
    AsyncStorage.getItem('permission').then((value) => {
      const { navigate } = this.props.navigation;
      if (value == null) {
        navigate('Account');
      }

      const permission = JSON.parse(value);
      if (!permission.IsAuthened) {
        navigate('Account');
      }
    });
  }
  render() {
    return (
      <ScrollView>
        <BookList navigation={this.props.navigation}/>
      </ScrollView>
    );
  }
}



