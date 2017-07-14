import thaxios from '../unilities/axios';

export function getBookById(id) {
    return function (dispatch) {
        thaxios({
            url: 'book/getBookById/'+id,
            method: 'GET',
            //params: obj
        }).then((res) => {
            dispatch({
                type: 'GET_BOOKBYID',
                payload: res.Data
            })
        });
    }
}