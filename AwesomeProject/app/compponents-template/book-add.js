import React, { Component } from 'react';
import { View, StyleSheet,Text,Image,
  Dimensions,
  TextInput,
  Button,
  TouchableOpacity,
ScrollView } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation'
import { connect } from 'react-redux';
import { getBookCategoryList } from '../actions/book.action';
import FormButton from './../components-smart/button'
import FormTextInput from './../components-smart/text-input'
import FormDatePicker from './../components-smart/date-picker'
import FormModelPicker from './../components-smart/model-picker'
const { width, height } = Dimensions.get("window");

@connect((store) => {
  return {
    BookCategoryList:store.bookReducer.BookCategoryList,
  }
})

export default class BookAll extends Component {
    constructor() {
        super();
        this.state = {
           book:{
            BookName:'aaaa'
           }
        }
    }
    componentWillMount() {
      this.props.dispatch(getBookCategoryList());
    }
    _saveBook= () => {
      // this.props.dispatch(addBookInfo().then(function(){
      //   const { navigate } = this.props.navigation;
      //   navigate('Main');
      // }));
    }
    render() {
        book=this.state;
        return (
        <ScrollView style={styles.container}>
          <View style={styles.wrapper}>
            <View style={styles.inputWrap}>
              <View style={styles.name}>
                <Text>书名:</Text>
              </View>
              <FormTextInput 
                value={book.BookName}
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

              <FormModelPicker 
                initValue='select book category'
                value=''
                data={this.props.BookCategoryList}/>
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