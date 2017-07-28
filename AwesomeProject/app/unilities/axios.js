import axios from 'axios';
import store from '../store';
import { showToast } from '../actions/toast.action';
import {
    Alert
} from 'react-native';
import loading from 'fs-loading'
import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';
import Config from '../config/config'

export default (obj) => {
    if(obj.hideGlobalLoading){
        loading.show()
    }
    var p = new Promise((resolve, reject) => {
        axios({
            url: obj.url,
            baseURL: Config.APIUrl +'/api/',
            method: obj.method ? obj.method : 'GET',
            params: obj.params,
            data: obj.data
        }).then((response) => {
            loading.hide()
            if (response.data.Status < 0) {
                Toast.info(response.data.Message, 1);
            } else {
                resolve(response.data);
            }
        }).catch((err) => {
            loading.hide()
            Toast.offline('网络连接失败,我们会尽快解决', 1);
            reject(err);
        });
    })
    return p;
}
