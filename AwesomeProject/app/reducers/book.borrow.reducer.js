export default function reducer(state = {
    BookBorrowList: [],
    Opearation:{}
}, action) {
    switch (action.type) {
        case 'GET_BOOK_BORROW_LIST':
            return {
                ...state,
                BookBorrowList: action.payload
            }
        case 'BOOK_BORROW':
            return {
                ...state,
                Opearation: action.payload
            }
        case 'SELECT_ALL_BOOK_LIST':
            return {
                ...state,
                BookBorrowList: action.payload
            } 
        case 'UNSELECT_ALL_BOOK_LIST':
            return {
                ...state,
                BookBorrowList: action.payload
            }    
        default:
            return state;
    }
}