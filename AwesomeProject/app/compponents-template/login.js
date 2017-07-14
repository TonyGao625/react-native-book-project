import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import FormIconTextInput from './../components-cell/form-icon-text-input'
import FormCustomButton from './../components-cell/form-custom-botton'
import Themes from './../src/themes/themes'
import { connect } from 'react-redux'
import { accountLogin, editEmail, editPassword } from '../actions/account.action';
import { batchActions, enableBatching} from 'redux-batched-actions';

const background = require("./../src/images/login_bg.png");
const { width, height } = Dimensions.get("window");

@connect((store) => {
  return {
    loginUser: store.accountReducer.loginUser,
  }
})

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
    };
  }
  _loginAccount = () => {
    this.setState({
      submitted: true
    });
    this.props.dispatch(batchActions([editEmail(this.props.loginUser.Email),editPassword(this.props.loginUser.Password)]))
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
        navigate('Main');
      })
    });
  }
  render() {
    const { loginUser } = this.props;
    return (
      <View style={styles.container}>
        <Image source={background} style={styles.background} resizeMode="cover">
          <View style={styles.markWrap}>
            <Icon name="book" size={120} color='white' />
          </View>
          <View style={styles.form}>
            <FormIconTextInput 
              iconName='person'
              iconSize={25}
              color='white'
              placeholder='Email'
              keyboardType='phone-pad'
              submitted={this.state.submitted}
              errorText={loginUser.emailError}
              value={loginUser.Email}
              onChangeText={(val) => this.props.dispatch(editEmail(val))}/>
            <FormIconTextInput 
              iconName='lock'
              iconSize={25}
              color='white'
              placeholder='Password'
              keyboardType='phone-pad'
              submitted={this.state.submitted}
              errorText={loginUser.passwordError}
              value={loginUser.Password}
              onChangeText={(val) => this.props.dispatch(editPassword(val))} />
            <FormCustomButton 
              activeOpacity={.5}
              text='登录'
              styleView={styles.button}
              styleText={styles.buttonText}
              onPress={this._loginAccount}/>
          </View>
          <View style={styles.container}>
            <View style={styles.remarkWrap}>
              <Text style={styles.remarkText}>Book Management</Text>
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
  background: {
    width,
    height,
  },
  form: {
    paddingVertical: 30,
  },
  button: {
    backgroundColor: "#43A047",
    paddingVertical: 20,
    marginTop: 30,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
  },
  remarkWrap: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  remarkText: {
    color: "#D8D8D8"
  }
});