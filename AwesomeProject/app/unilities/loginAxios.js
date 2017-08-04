import axios from 'axios';
import store from '../store';
import { showToast } from '../actions/toast.action';
import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';
import Config from '../config/config'
import loading from 'fs-loading'

export default (obj) => {
    loading.show()
    var p = new Promise((resolve, reject) => {
        axios({
            url: obj.url,
            baseURL: Config.LoginAPIUrl +'/api/',
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
