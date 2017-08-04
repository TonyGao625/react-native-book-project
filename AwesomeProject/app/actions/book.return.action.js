import thaxios from '../unilities/axios';

export function GetBookBorrowListByUserId(obj) {
    return function (dispatch) {
        thaxios({
            url: 'book/GetBookBorrowListByUserId?userName=' + obj,
            method: 'GET',
            hideGlobalLoading: true
            // params: obj
        }).then((res) => {
            res.Datas = res.Datas.map(function (item, index) {
                item.checked = false;
                return item;
            });
            dispatch({
                type: 'GET_BOOK_BORROW_LISTBYUSERID',
                payload: {
                    Datas: res.Datas,
                    Total: res.Total
                }
            })
        });
    };
}

export function BookReturnList(obj) {
    return new Promise(function (dispatch) {
        thaxios({
            url: 'book/BookReturn',
            method: 'POST',
            data: obj
        }).then((res)=>{
            dispatch({
                type: 'BOOK_RETURN',
                payload: res
            })
        });
    }); 
}
