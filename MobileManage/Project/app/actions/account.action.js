import thaxios from '../unilities/axios';
import storage from 'store2';
import validator from 'validator';

export function AccountLogin(obj) {
    return function (dispatch) {
        thaxios({
            url: 'account/login',
            method: 'POST',
            data: obj
        }).then((res) => {
            dispatch({
                type: 'USER_LOGIN',
                payload: res.Data
            })
        });
    }
}

export function editEmail(val) {
    return {
        type: 'EDIT_EMAIL',
        payload: {
            val: val,
            isEmail: validator.isEmail(val)
        }
    }
}

export function editPassword(val) {
    return {
        type: 'EDIT_PASSWORD',
        payload: {
            val: val,
            isPassword: !validator.isEmpty(val)
        }
    }
}