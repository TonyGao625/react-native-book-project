import { combineReducers } from 'redux';

import accountReducer from './account.reducer';
import bookReducer from './book.reducer'
import bookBorrowReducer from './book.borrow.reducer'
import bookReturnReducer from './book.return.reducer'

export default combineReducers({
    accountReducer,
    bookReducer,
    bookBorrowReducer,
    bookReturnReducer
})



