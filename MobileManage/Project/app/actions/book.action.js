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

export function getBookCategoryList(obj) {
    return function (dispatch) {
        thaxios({
            url: 'category/getList',
            method: 'GET',
            params: obj
        }).then((res) => {
           res.Datas= res.Datas.map(function(item,index){
            return {
                key:index,
                label:item.Name
            }
            });
            dispatch({
                type: 'GET_BOOK_CATEGORY_LIST',
                payload: res.Datas
            })
        });
    }
}

export function addBookInfo(obj) {
   return new Promise(function (dispatch) {
        thaxios({
            url: 'book/addOrUpdate',
            method: 'Post',
            data: obj
        }).then((res) => {
            dispatch({
                type: 'ADD_BOOKINFO',
                payload: res.Datas
            })
        });
    });
}