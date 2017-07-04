import thaxios from '../unilities/axios';
import storage from 'store2';

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