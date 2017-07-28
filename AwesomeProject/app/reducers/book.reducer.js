export default function reducer(state = {
    BookList: [],
    BooKlistTotalPage: 0,
    BookCategoryList: [],
    BookBorrowList: [],
    Book: {
        BookName: "",
        BookNameError: "",
        Author: "",
        AuthorError: "",
        PublicDate: "",
        PublicAddress: '',
        CategoryId: "",
        CategoryIDError: "",
        Remark: ""
    }
}, action) {
    switch (action.type) {
        case 'GET_BOOK_LIST':
            return {
                ...state,
                BookList: action.payload,
                BooKlistTotalPage: action.pageTotal
            }
        case 'GET_BOOK_CATEGORY_LIST':
            return {
                ...state,
                BookCategoryList: action.payload
            }
        case 'GET_BOOK_BORROW_LIST':
            return {
                ...state,
                BookBorrowList: action.payload
            }
        case 'VERYFY_BOOKNAME':
            return {
                ...state,
                Book: {
                    ...state.Book,
                    BookName: action.payload.val,
                    BookNameError: action.payload.BookNameError
                }
            }
        case 'VERYFY_AUTHOR':
            return {
                ...state,
                Book: {
                    ...state.Book,
                    Author: action.payload.val,
                    AuthorError: action.payload.AuthorError
                }
            }
        case 'VERYFY_CATEGORYID':
            return {
                ...state,
                Book: {
                    ...state.Book,
                    CategoryId: action.payload.val,
                    CategoryIDError: action.payload.CategoryIDError
                }
            }
        case "EDIT_REMARK":
            return {
                ...state,
                Book: {
                    ...state.Book,
                    Remark: action.payload.val
                }
            }
        case 'EDIT_PUBLICADDRESS':
            return {
                ...state,
                Book: {
                    ...state.Book,
                    PublicAddress: action.payload.val
                }
            }
        case 'EDIT_DATE':
            return {
                ...state,
                Book: {
                    ...state.Book,
                    PublicDate: action.payload.val
                }
            }
        case 'ADD_BOOKINFO':
            return {
                ...state,
                BookList: {
                    ...state.BookList.push(action.payload),
                }
            }
        case 'CLEAR_BOOK':
            return {
                ...state,
                Book: {}
            }
        default:
            return state;
    }
}