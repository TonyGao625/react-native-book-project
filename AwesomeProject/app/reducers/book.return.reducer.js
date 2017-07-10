export default function reducer(state = {
    BookReturnListByUserId: [],
}, action) {
    switch (action.type) {       
        case 'GET_BOOK_BORROW_LISTBYUSERID':
            return {
                ...state,
                BookReturnListByUserId: action.payload
            }   
        default:
            return state;
    }
}