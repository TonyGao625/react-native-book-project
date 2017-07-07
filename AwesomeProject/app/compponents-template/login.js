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
import { accountLogin, editEmail, editPassword } from '../actions/account.action';

@connect((store) => {
  return {
    loginUser: store.accountReducer.loginUser,
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
    this.props.dispatch(editEmail(this.props.loginUser.Email));
    this.props.dispatch(editPassword(this.props.loginUser.Password));
    setTimeout(() => {
      if (this.props.loginUser.emailError || this.props.loginUser.passwordError) {
        return;
      }
      const { navigate } = this.props.navigation;
      accountLogin({
        UsersModel: {
          UserName: this.props.loginUser.Email,
          Password: this.props.loginUser.Password
        }
      }).then(function () {
        navigate('Main')
      })
    });

  }
  componentWillReceiveProps = () => {
  }
  render() {
    const { loginUser } = this.props;
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
                value={loginUser.Email}
                placeholder='Email'
                white={true}
                submitted={this.state.submitted}
                keyboardType='phone-pad'
                errorText={loginUser.emailError}
                onChangeText={(val) => this.props.dispatch(editEmail(val))} />
            </View>
            <View style={styles.inputWrap}>
              <View style={styles.iconWrap}>
                <Icon name="lock" size={25} color='white' />
              </View>
              <FormTextField
                value={loginUser.Password}
                placeholder='Password'
                white={true}
                submitted={this.state.submitted}
                keyboardType='phone-pad'
                errorText={loginUser.passwordError}
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
    borderBottomWidth: 1,
    borderBottomColor: "#CCC"
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