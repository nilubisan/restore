import {
    ADD_BOOK_TO_CART,
    BOOKS_LOAD_FAILURE,
    BOOKS_LOAD_REQUEST,
    BOOKS_LOAD_SUCCESS,
    REMOVE_ALL_BOOKS_FROM_CART,
    REMOVE_BOOK_FROM_CART
} from '../actionTypes'

const initialState = {
    bookList: {
        books: [],
        loading: false,
        error: null
    },
    shoppingCart: {
        orderTotal: 0,
        cartItems: []
    }
}

const updateCartItems = (cartItems, item, ind) => {
    if(item.count === 0) {
        return [
            ...cartItems.slice(0, ind),
            ...cartItems.slice(ind + 1)
        ]
    }
    if(ind === -1) {
        return [
            ...cartItems,
            item
        ]
    }
    return [
        ...cartItems.slice(0, ind),
        item,
        ...cartItems.slice(ind + 1)
    ]
}

const updateCartItem = (book, item = {}, quantity) => {
    const {
        id = book.id,
        count = 0,
        title = book.title,
        total = 0
    } = item

    return {
        id,
        title,
        count: count + quantity,
        total: total + (book.price * quantity)
    }
}

const updateOrder = (state, bookId, quantity) => {
    const { bookList: { books }, shoppingCart: { cartItems } } = state

    const book = books.find(({ id }) => id === bookId)
    const itemIndex = cartItems.findIndex(({ id }) => id === bookId)
    const item = cartItems[itemIndex]
    const newItem = updateCartItem(book, item, quantity)
    return { orderTotal: 0, cartItems: updateCartItems(cartItems, newItem, itemIndex) }
}

const updateBookList = (state, action) => {
    switch (action.type) {
        case BOOKS_LOAD_REQUEST:
            return { books: [], loading: true, error: null }
        case BOOKS_LOAD_SUCCESS:
            return { books: action.payload, loading: false, error: null }
        case BOOKS_LOAD_FAILURE:
            return { books: [], loading: false, error: action.error }
    }
}

const updateShoppingCart = (state, action) => {
    switch (action.type) {
        case ADD_BOOK_TO_CART:
            return updateOrder(state, action.payload, 1)

        case REMOVE_BOOK_FROM_CART:
            return updateOrder(state, action.payload, -1)

        case REMOVE_ALL_BOOKS_FROM_CART:
            const item = state.shoppingCart.cartItems.find(({ id }) => id === action.payload)
            return updateOrder(state, action.payload, -item.count)
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BOOKS_LOAD_REQUEST:
        case BOOKS_LOAD_SUCCESS:
        case BOOKS_LOAD_FAILURE:
            return {
                ...state,
                bookList: updateBookList(state, action)
            }
        case ADD_BOOK_TO_CART:
        case REMOVE_BOOK_FROM_CART:
        case REMOVE_ALL_BOOKS_FROM_CART:
            return {
                ...state,
                shoppingCart: updateShoppingCart(state, action)
            }
        default:
            return state
    }
}

export default reducer