export default function reducer(state = {
    loginUser: {
        UserName: '',
        Password: ''
    },
    validation: {
        UserName: '',
        Password: ''
    },
    loggedUser: {
    },
}, action) {
    switch (action.type) {
        case 'EDIT_EMAIL':
            return {
                ...state,
                loginUser: {
                    ...state.loginUser,
                    email: action.payload.val
                },
                validation: {
                    ...state.validation,
                    email: action.payload.isValidated
                }
            }
        case 'EDIT_PASSWORD':
            return {
                ...state,
                loginUser: {
                    ...state.loginUser,
                    password: action.payload.val
                },
                validation: {
                    ...state.validation,
                    password: action.payload.isValidated
                }
            }
        case 'USER_LOGIN':
            return {
                ...state,
                loggedUser: action.payload,
            }
        default:
            return state;
    }
}