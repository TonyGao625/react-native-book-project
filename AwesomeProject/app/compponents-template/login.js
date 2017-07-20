import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import FormIconTextInput from './../components-cell/form-icon-text-input'
import FormCustomButton from './../components-cell/form-custom-botton'
import Themes from './../src/themes/themes'
import { connect } from 'react-redux'
import { accountLogin, editEmail, editPassword } from '../actions/account.action';
import { batchActions, enableBatching} from 'redux-batched-actions';

const background = require("./../src/images/login_bg.png");
import Styles from './style/login'

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
      <View style={Styles.container}>
        <Image source={background} style={Styles.background} resizeMode="cover">
          <View style={Styles.markWrap}>
            <Icon name="book" size={120} color='white' />
          </View>
          <View style={Styles.form}>
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
              styleView={Styles.button}
              styleText={Styles.buttonText}
              onPress={this._loginAccount}/>
          </View>
          <View style={Styles.container}>
            <View style={Styles.remarkWrap}>
              <Text style={Styles.remarkText}>Book Management</Text>
            </View>
          </View>
        </Image>
      </View>
    );
  }
}

