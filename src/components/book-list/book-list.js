import React, {useEffect} from 'react';
import BookListItem from '../book-list-item';
import { withBookstoreService } from '../hoc';
import {booksLoadedSuccess} from '../../redux/actions'
import {compose} from '../../utils';
import { connect } from 'react-redux';
import './book-list.css';

const BookList = ({books, bookstoreService, booksLoadedSuccess}) => {
    useEffect(() => {
        const data = bookstoreService.getBooks();
        booksLoadedSuccess(data);
    }, [])
    return (
        <ul className='book-list'>
            {
                books.map((book) => {
                    return(
                        <li key={book.id}>
                            <BookListItem book={book} />
                        </li>
                    )
                })
            }
        </ul>
    )
};

const mapStateToProps = ({books}) => {
    return { books };
}

const mapDispatchToProps = {
    booksLoadedSuccess
}

export default compose(withBookstoreService(), connect(mapStateToProps, mapDispatchToProps))(BookList);