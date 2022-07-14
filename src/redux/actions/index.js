import { BOOKS_LOAD_REQUEST, BOOKS_LOAD_SUCCESS,  BOOKS_LOAD_FAILURE, ADD_BOOK_TO_CART, REMOVE_BOOK_FROM_CART, REMOVE_ALL_BOOKS_FROM_CART} from '../actionTypes'

const booksLoadRequest = () => ({type: BOOKS_LOAD_REQUEST})

const booksLoadSuccess = (newBooks) => ({
    type: BOOKS_LOAD_SUCCESS,
    payload: newBooks
});

const booksLoadFailure = (error) => ({
    type: BOOKS_LOAD_FAILURE,
    error
});

export const addBookToCart = (bookId) => {
    return {
        type: ADD_BOOK_TO_CART,
        payload: bookId
    }
};

export const removeBookFromCart = (bookId) => {
    return {
        type: REMOVE_BOOK_FROM_CART,
        payload: bookId
    }
};

export const removeAllBooksFromCart = (bookId) => {
    return {
        type: REMOVE_ALL_BOOKS_FROM_CART,
        payload: bookId
    }
};

const fetchBooks = (bookstoreService, dispatch) => () => {
    dispatch(booksLoadRequest());
    bookstoreService.getBooks().then((data) => {
        dispatch(booksLoadSuccess(data));
    }).catch((error) => dispatch(booksLoadFailure(error)))
}

export {fetchBooks}