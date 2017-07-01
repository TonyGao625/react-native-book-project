import thaxios from '../unilities/axios';

export function getBookList(obj) {
    return function (dispatch) {
        thaxios({
            url: 'book/getList',
            method: 'GET',
            params: obj
        }).then((res) => {
            dispatch({
                type: 'GET_BOOK_LIST',
                payload: res.Datas
            })
        });
    }
}