import thaxios from '../unilities/axios';
import { AsyncStorage } from 'react-native';
import validator from 'validator';

export function accountLogin(obj) {
    return new Promise(function (dispatch) {
        thaxios({
            url: 'account/login',
            method: 'POST',
            data: obj
        }).then((res) => { 
            var permission={
                IsAuthened:true,
                RoleId:res.Data.RoleId,
                UserId:res.Data.Id,
                UserName:res.Data.UserName
            };
            AsyncStorage.setItem('permission', JSON.stringify(permission));
            dispatch({
                type: 'USER_LOGIN',
                payload: res.Data
            })
        });
    });
}

export function editEmail(val) {
    var emailError = '';
    if (!val) {
        emailError = 'Required'
    } else if (!validator.isEmail(val)) {
        emailError = 'Must be a valid email'
    }
    return {
        type: 'EDIT_EMAIL',
        payload: {
            val: val,
            emailError: emailError
        }
    }
}

export function editPassword(val) {
    var passwordError = '';
    if (!val) {
        passwordError = 'Required'
    }
    return {
        type: 'EDIT_PASSWORD',
        payload: {
            val: val,
            passwordError: passwordError
        }
    }

};