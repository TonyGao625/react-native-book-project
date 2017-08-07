import thaxios from '../unilities/loginAxios';
import { AsyncStorage } from 'react-native';
import validator from 'validator';
import Config from '../config/config'

export function login(obj) {
    return function (dispatch) {
        thaxios({
            url: 'account/login',
            method: 'POST',
            data: obj
        }).then((res) => {
            var roleId = 2;
            if (Config.ManageUserList.findIndex(x=>x.userId==obj.userId) > -1) {
                roleId = 1;
            }
            var permission = {
                IsAuthened: true,
                RoleId: roleId,
                UserName: obj.userId,
                Email: res.Email,
                RealName: res.Name
            };
            AsyncStorage.setItem('permission', JSON.stringify(permission));
            dispatch({
                type: 'USER_LOGIN',
                payload: {
                    data: res,
                    permission: permission
                }
            })

        });
    }
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

export function clearPermission() {
    return function (dispatch) {
        AsyncStorage.removeItem('permission');
        var permission = {
            IsAuthened: false
        };
        dispatch({
            type: 'REMOVE_PERMISSION',
            payload: permission
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