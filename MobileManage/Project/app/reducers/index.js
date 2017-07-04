import { combineReducers } from 'redux';

import accountReducer from './account.reducer';
import bookReducer from './book.reducer'

export default combineReducers({
    accountReducer,
    bookReducer
})



