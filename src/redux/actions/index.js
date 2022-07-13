import {BOOKS_LOADED_SUCCESS} from '../actionTypes'

const booksLoadedSuccess = (newBooks) => ({
    type: "BOOKS_LOADED_SUCCESS",
    payload: newBooks
});

export {booksLoadedSuccess}