import thaxios from '../unilities/axios';
import { AsyncStorage } from 'react-native';

export function AccountLogin(obj) {
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