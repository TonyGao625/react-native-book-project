export default function reducer(state = {
    loginUser: {
        Email: '',
        Password: ''
    },
    validation: {
        Email: false,
        Password: false
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
                    Email: action.payload.val
                },
                validation: {
                    ...state.validation,
                    Email: action.payload.isEmail
                }
            }
        case 'EDIT_PASSWORD':
            return {
                ...state,
                loginUser: {
                    ...state.loginUser,
                    Password: action.payload.val
                },
                validation: {
                    ...state.validation,
                    Password: action.payload.isPassword
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