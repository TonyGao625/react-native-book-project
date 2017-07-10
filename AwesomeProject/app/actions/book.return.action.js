import thaxios from '../unilities/axios';

export function GetBookBorrowListByUserId(obj) {
    return function (dispatch) {
        thaxios({
            url: 'book/GetBookBorrowListByUserId?userId='+obj,
            method: 'GET',
           // params: obj
        }).then((res) => {
            res.Datas = res.Datas.map(function (item, index) {
                item.checked=false;
                return item;
            });
            dispatch({
                type: 'GET_BOOK_BORROW_LISTBYUSERID',
                payload: res.Datas
            })
        });
    }
}
