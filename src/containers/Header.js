import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext'; // Adjust path as needed
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Header = () => {
    const { cart } = useCart();
    const cartItemCount = cart.length;

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container">
                <Link className="navbar-brand" to="/">FakeShop</Link>
                <div className="d-flex align-items-center ms-auto">
                    <Link className="nav-link" to="/cart">
                        <i className="bi bi-cart fs-3"></i>
                        {cartItemCount > 0 && (
                            <span className="badge bg-danger rounded-pill ms-1">{cartItemCount}</span>
                        )}
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Header;
