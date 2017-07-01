export default function reducer(state = {
    BookList: []
}, action) {
    switch (action.type) {
        case 'GET_BOOK_LIST':
            return {
                ...state,
                BookList: action.payload
            }
        default:
            return state;
    }
}