export default function reducer(state = {
    loginUser: {
        Email: '',
        Password: '',
        emailError:'',
        passwordError:''
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
                    Email: action.payload.val,
                    emailError: action.payload.emailError,
                    
                },
            }
        case 'EDIT_PASSWORD':
            return {
                ...state,
                loginUser: {
                    ...state.loginUser,
                    Password: action.payload.val,
                    passwordError:action.payload.passwordError,
                },
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