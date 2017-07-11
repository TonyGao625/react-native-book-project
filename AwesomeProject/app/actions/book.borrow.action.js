import thaxios from '../unilities/axios';

export function getBookBorrowList(obj) {
    return function (dispatch) {
        thaxios({
            url: 'collect/getCollectList?userId='+obj,
            method: 'GET',
            //params: obj
        }).then((res) => {
            res.Datas = res.Datas.map(function (item, index) {
                item.checked=false;
                return item;
            });
            dispatch({
                type: 'GET_BOOK_BORROW_LIST',
                payload: res.Datas
            })
        });
    }
}

export function checkSelectItem(val){

}

export function selectALL(datas) {
    datas = datas.map(function (item, index) {
        item.checked=true;
        return item;
    });
    return {
        type: 'SELECT_ALL_BOOK_LIST',
        payload: datas
    }
}

export function unSelectALL(datas) {
    datas = datas.map(function (item, index) {
        item.checked=false;
        return item;
    });
    return {
        type: 'UNSELECT_ALL_BOOK_LIST',
        payload: datas
    }
}