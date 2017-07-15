export default function reducer(state = {
    Flag: 0
}, action) {
    switch (action.type) {
        case 'CHANGE_DATA':
            return {
                ...state,
                Flag: action.payload.val
            }
        default:
            return state;
    }
}