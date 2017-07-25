export default function reducer(state = {
    loginUser: {
        UserName: '',
        Password: '',
        userNameError: '',
        passwordError: ''
    },
    loggedUser: {
    },
    permission: {}
}, action) {
    switch (action.type) {
        case 'EDIT_USERNAME':
            return {
                ...state,
                loginUser: {
                    ...state.loginUser,
                    UserName: action.payload.val,
                    userNameError: action.payload.userNameError,

                },
            }
        case 'EDIT_PASSWORD':
            return {
                ...state,
                loginUser: {
                    ...state.loginUser,
                    Password: action.payload.val,
                    passwordError: action.payload.passwordError,
                },
            }
        case 'USER_LOGIN':
            return {
                ...state,
                loggedUser: action.payload,
            }
        case 'GET_PERMISSION':
            return {
                ...state,
                permission: action.payload,
            }
        case "REMOVE_PERMISSION":
            return {
                ...state,
                permission: {}
            }
        default:
            return state;
    }
}