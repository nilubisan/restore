import React from 'react';

const ShopHeader = ({numItems, total}) => {
    return(
        <header className="shop-header row">
            <a className="logo text-dark" href="#">ReStore</a>
            <a>
                <i className="cart-icon fa fa-shopping-cart" />
            </a>
        </header>
    )
};

export default ShopHeader;