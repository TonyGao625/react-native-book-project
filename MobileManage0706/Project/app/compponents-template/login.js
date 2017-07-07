import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
  AsyncStorage
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const { width, height } = Dimensions.get("window");

const background = require("./login_bg.png");

import FormTextField from './../components-smart/text-input'
import FormButton from './../components-smart/button'
import Themes from './../src/themes/themes'
import { connect } from 'react-redux'
import { AccountLogin,editEmail,editPassword } from '../actions/account.action';

@connect((store) => {
  return {
    loggedUser: store.accountReducer.loggedUser,
    loginUser: store.accountReducer.loginUser,
    validation: store.accountReducer.validation
  }
})

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false
    };

  }
  _loginAccount = () => {
    this.setState({
      submitted: true
    });
    const { navigate } = this.props.navigation;
      AccountLogin({
        UsersModel: {
         UserName:this.props.loginUser.Email,
         Password:this.props.loginUser.Password 
        }
      }).then(function(){       
        navigate('Main')
      })
  }
  // componentWillReceiveProps = () => {
  //   const { navigate } = this.props.navigation;
  //   navigate('Main')
  // }
  render() {
    const { loginUser, validation } = this.props;
    return (
      <View style={styles.container}>
        <Image source={background} style={styles.background} resizeMode="cover">
          <View style={styles.markWrap}>
            <Icon name="laptop-chromebook" size={120} color='white' />
          </View>
          <View style={styles.wrapper}>
            <View style={styles.inputWrap}>
              <View style={styles.iconWrap}>
                <Icon name="person" size={25} color='white' />
              </View>
              <FormTextField
              isPasswod={false}
                value={loginUser.Email}
                placeholder='Email'
                white={true}
                submitted={this.state.submitted}
                keyboardType='phone-pad'
                errorText='Please type in valid Email'
                validated={validation.Email}
                onChangeText={(val) => this.props.dispatch(editEmail(val))} />
            </View>
            <View style={styles.inputWrap}>
              <View style={styles.iconWrap}>
                <Icon name="lock" size={25} color='white' />
              </View>
                <FormTextField
                isPasswod={true}
                value={loginUser.Password}
                placeholder='Password'
                white={true}
                submitted={this.state.submitted}
                keyboardType='phone-pad'
                errorText='Password is required'
                validated={validation.Password}
                onChangeText={(val) => this.props.dispatch(editPassword(val))} />
            </View>
            <TouchableOpacity activeOpacity={.5} onPress={this._loginAccount}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>登录</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <View style={styles.signupWrap}>
              <Text style={styles.accountText}>Book Management</Text>
            </View>
          </View>
        </Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  markWrap: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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
    height: 70,
  },
  iconWrap: {
    paddingHorizontal: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    height: 20,
    width: 20,
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