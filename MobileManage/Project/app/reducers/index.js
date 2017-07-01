import { combineReducers } from 'redux';

import userReducer from './user.reducer';
import bookReducer from './book.reducer'

export default combineReducers({
    userReducer,
    bookReducer
})



