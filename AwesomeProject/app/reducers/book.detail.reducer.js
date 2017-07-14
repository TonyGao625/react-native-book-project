export default function reducer(state = {
    BookDetail: [],
}, action) {
    switch (action.type) {
        case 'GET_BOOKBYID':
            return {
                ...state,
                BookDetail: action.payload
            }
        default:
            return state;
    }
}