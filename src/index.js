import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider} from 'react-redux';
import { BrowserRouter as Router} from 'react-router-dom';
import App from './components/app';
import ErrorBoundary from './components/error-boundary'
import { BookStoreServiceProvider } from './components/bookstore-service-context';
import { bookstoreService } from './services/bookstore-service'
import store from './store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <ErrorBoundary>
            <BookStoreServiceProvider value={bookstoreService}>
                <Router>
                    <App/>
                </Router>
            </BookStoreServiceProvider>
        </ErrorBoundary>
    </Provider>
);
