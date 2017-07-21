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
            var permission = {
                IsAuthened: true,
                RoleId: res.Data.RoleId,
                UserId: res.Data.Id,
                UserName: res.Data.UserName,
                RealName: res.Data.RealName
            };
            AsyncStorage.setItem('permission', JSON.stringify(permission));
            dispatch({
                type: 'USER_LOGIN',
                payload: res.Data
            })
        });
    });
}

export function getPermission() {
    return function (dispatch) {
        AsyncStorage.getItem('permission').then((value) => {
            const permission = JSON.parse(value);
            dispatch({
                type: 'GET_PERMISSION',
                payload: permission
            })
        })
    }
}

export function editUserName(val) {
    var userNameError = '';
    if (!val) {
        userNameError = 'Required'
    }
    return {
        type: 'EDIT_USERNAME',
        payload: {
            val: val,
            userNameError: userNameError
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