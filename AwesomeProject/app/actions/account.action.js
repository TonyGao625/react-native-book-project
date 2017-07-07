import thaxios from '../unilities/axios';
import storage from '../async-storage';

export function AccountLogin(obj) {
    return new Promise(function (dispatch) {
        thaxios({
            url: 'account/login',
            method: 'POST',
            data: obj
        }).then((res) => {
            storage.set('RoleId', res.Data.RoleId);
            dispatch({
                type: 'USER_LOGIN',
                payload: res.Data
            })
        });
    });
}