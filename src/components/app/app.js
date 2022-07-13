import React from 'react';
import './app.css';
import { withBookstoreService } from '../hoc'
import { Routes, Route } from 'react-router-dom'
import { HomePage, CartPage } from '../pages'

const App = () => {
    return (
        <main role="main" className="container">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/cart" element={<CartPage />} />
            </Routes>
        </main>
    );
};

export default withBookstoreService()(App);