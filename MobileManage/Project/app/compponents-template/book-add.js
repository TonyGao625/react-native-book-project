

import { StackNavigator, TabNavigator } from 'react-navigation'
import { connect } from 'react-redux';
import { getBookList } from '../actions/book.action';
import axios from 'axios';
import FormButton from './../components-smart/button'

import BookAdd from './../components-page/book-add'


import React, { Component } from 'react';
import { View, StyleSheet,Text,Image,
  Dimensions,
  TextInput,
  Button,
  TouchableOpacity,
ScrollView } from 'react-native';
import FormTextInput from './../components-smart/text-input'
import FormDatePicker from './../components-smart/datepicker'
const { width, height } = Dimensions.get("window");
import ModalPicker from 'react-native-modal-picker'

@connect((store) => {
  return {
    BookList: store.bookReducer.BookList
  }
})

export default class BookAll extends Component {
  constructor() {
        super();

        this.state = {
            textInputValue: ''
        }
    }
    
    _saveBook= () => {
         const { navigate } = this.props.navigation;
         navigate('Main');
    }
    render() {
        let index = 0;
        const data = [
            { key: index++, section: true, label: 'Fruits' },
            { key: index++, label: 'Red Apples' },
            { key: index++, label: 'Cherries' },
            { key: index++, label: 'Cranberries' },
            { key: index++, label: 'Pink Grapefruit' },
            { key: index++, label: 'Raspberries' },
            { key: index++, section: true, label: 'Vegetables' },
            { key: index++, label: 'Beets' },
            { key: index++, label: 'Red Peppers' },
            { key: index++, label: 'Radishes' },
            { key: index++, label: 'Radicchio' },
            { key: index++, label: 'Red Onions' },
            { key: index++, label: 'Red Potatoes' },
            { key: index++, label: 'Rhubarb' },
            { key: index++, label: 'Tomatoes' }
        ];
        return (
        <ScrollView style={styles.container}>
          <View style={styles.wrapper}>
            <View style={styles.inputWrap}>
              <View style={styles.name}>
                <Text>书名:</Text>
              </View>
              <FormTextInput 
                style={styles.input}  />
            </View>
            <View style={styles.inputWrap}>
              <View style={styles.name}>
                <Text>作者:</Text>
              </View>
              <FormTextInput
                style={styles.input}  />
            </View>
            <View style={styles.inputWrap}>
              <View style={styles.name}>
                <Text>出版时间:</Text>
              </View>
              <FormDatePicker/>
            </View>
            <View style={styles.inputWrap}>
              <View style={styles.name}>
                <Text>出版地址:</Text>
              </View>
              <FormTextInput
                style={styles.input}  />
            </View>
            <View style={styles.inputWrap}>
              <View style={styles.name}>
                <Text>分类:</Text>
              </View>

              <View style={{width:'100%'}}>
                <ModalPicker
                    data={data}
                    initValue="Select book category!"
                    onChange={(option)=>{ this.setState({textInputValue:option.label})}}>
                    
                    <FormTextInput
                       editable={false}
                        placeholder="Select book category!"
                        value={this.state.textInputValue} />
                        
                </ModalPicker>
               </View>
            </View>

            <View style={styles.inputWrap}>
                <View style={styles.name}>
                    <Text>简介:</Text>
                </View>
                <FormTextInput
                    style={styles.input}  />
               </View>
          </View>

          <View>
             <FormButton 
             onPress={this._saveBook}
             title='保存'/>
          </View>
      </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  markWrap: {
    flex: 1,
    paddingVertical: 30,
  },
  mark: {
    width: null,
    height: null,
    flex: 1,
  },
  background: {
    width,
    height,
  },
  wrapper: {
    paddingVertical: 30,
  },
  inputWrap: {
    flexDirection: "row",
    marginVertical: 10,
    height: 40,
    borderBottomWidth: 0
  },
  name: {
    paddingHorizontal: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#43A047",
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
  },
  forgotPasswordText: {
    color: "#D8D8D8",
    backgroundColor: "transparent",
    textAlign: "right",
    paddingRight: 15,
  },
  signupWrap: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  accountText: {
    color: "#D8D8D8"
  },
  signupLinkText: {
    color: "#FFF",
    marginLeft: 5,
  }
});