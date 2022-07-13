import { BOOKS_LOADED_SUCCESS } from '../actionTypes'

const initialState = {
    books: [],

};

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case BOOKS_LOADED_SUCCESS:
            return {
                books: action.payload
            };
        default:
            return state;
    }
};

export default reducer;