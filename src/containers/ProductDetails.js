import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectproduct, removeSelectedproduct } from '../redux/actions/productActions';
import { useCart } from './CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const ProductDetails = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [addedToCart, setAddedToCart] = useState(false);
    const product = useSelector((state) => state.product);
    const { description, image, price, title, category } = product;
    const { ProductID } = useParams();
    const dispatch = useDispatch();
    const { addToCart } = useCart();

    const fetchProductDetails = async () => {
        try {
            const response = await axios.get(`https://fakestoreapi.com/products/${ProductID}`);
            dispatch(selectproduct(response.data));
        } catch (err) {
            setError('Failed to fetch product details. Please try again later.');
            console.error('Error fetching product details:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (ProductID) fetchProductDetails();
        return () => {
            dispatch(removeSelectedproduct());
        };
    }, [ProductID]);

    const handleAddToCart = () => {
        addToCart(product);
        setAddedToCart(true);
        setTimeout(() => setAddedToCart(false), 2000); // Hide the message after 2 seconds
    };

    return (
        <div className="container mt-5">
            {loading && <div className="text-center">Loading...</div>}
            {error && <div className="alert alert-danger text-center">{error}</div>}
            {!loading && !error && (
                <div className="card mb-5">
                    <div className="row g-0">
                        <div className="col-md-6 d-flex justify-content-center align-items-center">
                            <img src={image} className="img-fluid rounded-start" alt={title} style={{ maxHeight: '500px', objectFit: 'contain' }} />
                        </div>
                        <div className="col-md-6 p-4">
                            <h1 className="mb-3">{title}</h1>
                            <h2 className="text-success mb-3">${price}</h2>
                            <h3 className="text-muted mb-4">{category}</h3>
                            <p className="mb-4" style={{ fontSize: '1.1em' }}>{description}</p>
                            <button className="btn btn-primary btn-lg" onClick={handleAddToCart}>
                                <i className="bi bi-cart me-2"></i> Add to Cart
                            </button>
                            {addedToCart && <div className="alert alert-success mt-3">Product added to cart!</div>}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductDetails;
