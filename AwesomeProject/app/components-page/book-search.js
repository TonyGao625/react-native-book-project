import React, { Component } from 'react';
import { AsyncStorage, ScrollView, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FormTextInput from '../components-cell/form-text-input'
import BookCategory from './../compponents-template/book-category'
import storage from 'store2';

class BookSearchText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookName: ''
    };
  }
  _onChangeText=(val)=>{
    this.setState({
      bookName:val
    });
    storage.session('BookName', this.state.bookName);
  }
  render() {
    return (
      <View style={styles.search}>
        <FormTextInput
          value={this.state.bookName}
          style={styles.searchText}
          onChangeText={(val)=>this._onChangeText(val)}
          placeholder='search'></FormTextInput>
      </View>
    );
  }
}

class BookSearchButton extends Component {
  _onSearchBook = () => {
    const { navigate } = this.props.navigation;
    navigate('Main');
  }
  render() {
    return (
      <TouchableOpacity 
      style={styles.buttonView}
      activeOpacity={.5} 
      onPress={this._onSearchBook}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>搜索</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default class Search extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: <BookSearchText />,
    headerRight: <BookSearchButton navigation={navigation}/>
  });
  render() {
    return (
        <BookCategory navigation={this.props.navigation}/>
    );
  }
}

const styles = StyleSheet.create({
  search: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: -20
  },
  searchText: {
    paddingRight:50,
  },
  buttonView:{
    width: 80,
    marginRight: 10
  },
  button: {
    backgroundColor: "#43A047",
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius:20
  },
  buttonText: {
    color: "#FFF",
    fontWeight: 'bold'
  },
});



