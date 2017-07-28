export default function reducer(state = {
    BookReturnListByUserId: [],
    OverTimeCount: 0,
}, action) {
    switch (action.type) {
        case 'GET_BOOK_BORROW_LISTBYUSERID':
            return {
                ...state,
                BookReturnListByUserId: action.payload.Datas,
                OverTimeCount: action.payload.Total
            }

        case 'SELECT_ALL_BOOK_LIST':
            return {
                ...state,
                BookReturnListByUserId: action.payload
            }

        case "CLICK_ONE":
            return {
                ...state,
                BookReturnListByUserId: [
                    ...state.BookReturnListByUserId.slice(0, state.BookReturnListByUserId.indexOf(state.action.payload)),
                    state.action.payload, ...state.BookReturnListByUserId.slice(state.BookReturnListByUserId.indexOf(state.action.payload) + 1)
                ]
            }

        default:
            return state;
    }
}

