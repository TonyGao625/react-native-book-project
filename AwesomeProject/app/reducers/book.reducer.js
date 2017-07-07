export default function reducer(state = {
    BookList: [],
    BookCategoryList:[]
}, action) {
    switch (action.type) {
        case 'GET_BOOK_LIST':
            return {
                ...state,
                BookList: action.payload
            }
        case 'GET_BOOK_CATEGORY_LIST':
            return {
                ...state,
                BookCategoryList: action.payload
            }
        default:
            return state;
    }
}