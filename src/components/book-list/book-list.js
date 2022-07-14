import React, {useEffect} from 'react';
import BookListItem from '../book-list-item';
import { withBookstoreService } from '../hoc';
import { fetchBooks, addBookToCart } from '../../redux/actions'
import {compose} from '../../utils';
import { connect } from 'react-redux';
import Spinner from '../spinner'
import './book-list.css';

const BookListContainer = ({books, loading, error, fetchBooks, addBookToCart}) => {
    useEffect(() => {
        fetchBooks();
    }, []);

    return loading ? <Spinner /> : error ? error : (
        <BookList books={books} addBookToCart={addBookToCart}/>
    );
};

const BookList = ({books, addBookToCart}) => (
    <ul className='book-list'>
        {
            books.map((book) => {
                return(
                    <li key={book.id}>
                        <BookListItem book={book} onAddToCard={() => addBookToCart(book.id)}/>
                    </li>
                )
            })
        }
    </ul>
);

const mapStateToProps = ({bookList: {books, loading, error}}) => {
    return { books, loading, error };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchBooks: fetchBooks(ownProps.bookstoreService, dispatch),
        addBookToCart: (id) => dispatch(addBookToCart(id))
    }
}

export default compose(withBookstoreService(), connect(mapStateToProps, mapDispatchToProps))(BookListContainer);