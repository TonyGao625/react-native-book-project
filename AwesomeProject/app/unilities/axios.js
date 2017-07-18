import axios from 'axios';
import store from '../store';
import { showToast } from '../actions/toast.action';
import {
  Alert
} from 'react-native';
import loading from 'fs-loading'

export default (obj) => {
    loading.show()
    var p = new Promise((resolve, reject) => {
        
        axios({
            url: obj.url,
            baseURL: 'http://192.168.1.116:8001/api/',
            method: obj.method ? obj.method : 'GET',
            params:obj.params,
            data: obj.data
        }).then((response) => {
            loading.hide()
            if (response.data.Status<0) {
                Alert.alert('', response.data.Message,[],{ cancelable: true });
            } else {
                resolve(response.data);
            }
        }).catch((err) => {
           // loading.hide()
             Alert.alert('','Opps,内部出现问题了，我们会尽快解决',[],{ cancelable: true });
            reject(err);
        });
    })
    return p;
}
