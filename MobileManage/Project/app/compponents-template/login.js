import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableHighlight,
  Alert
} from 'react-native';
import FormTextInput from './../components-smart/text-input'
import FormButton from './../components-smart/button'
import Themes from './../src/themes/themes'
import { connect } from 'react-redux'
import { AccountLogin } from '../actions/account.action';

@connect((store) => {
    return {
        loggedUser: store.accountReducer.loggedUser
    }
})

export default class Login extends Component {
  constructor(props) {
    super(props);
      this.state = {
        UserName: '',
        Password: ''};
  }
  _loginAccount = () => {
      this.props.dispatch(AccountLogin({
        UsersModel: this.state
      }));
  }
  componentWillReceiveProps=()=>{
     const { navigate } = this.props.navigation;
     navigate('Main')
  }
  render() {
    return (
      <View style={styles.formLogin}>
        <View style={styles.formInput}>
          <FormTextInput 
          placeholder='用户名'
          isPasswod={false}
          value={this.state.UserName}
          onChangeText={(val) => this.setState({ UserName: val })} />
          <FormTextInput
          placeholder='密码'
          isPasswod= {true}
          value={this.state.Password}
          onChangeText={(val) => this.setState({ Password: val })}  />
        </View>
        <FormButton 
        title='登录' 
        color={Themes.color}
        onPress={this._loginAccount}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  formLogin: {
    marginTop: 200,
    marginLeft:10,
    marginRight:10,
  },
  formInput:{
    marginBottom:30
  }
});