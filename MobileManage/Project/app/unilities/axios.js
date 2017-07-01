import axios from 'axios';
import store from '../store';
import { showToast } from '../actions/toast.action';

export default (obj) => {
    var p = new Promise((resolve, reject) => {
        axios({
            url: obj.url,
            baseURL: 'http://192.168.1.116:8001/api/',
            method: obj.method ? obj.method : 'GET',
            params:obj.params,
            data: obj.data
        }).then((response) => {
            if (response.data.Status<0) {
                 store.dispatch(showToast({
                    className: 'error-toast',
                    message: response.data.errors
                }))
            } else {
                resolve(response.data);
            }
        }).catch((err) => {
            //need to be do with toast
            store.dispatch(showToast({
                className: 'error-toast',
                message: 'Opps,内部出现问题了，我们会尽快解决'
            }))
            reject(err);
        });
    })
    return p;
}
