import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);

  return (
    <div className="row">
      {products.map((product) => (
        <div className="col-md-4 mb-4" key={product.id}>
          <div className="card">
            <img src={product.image} className="card-img-top" alt={product.title} style={{ height: '200px', objectFit: 'cover' }} />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">${product.price}</p>
              <Link to={`/product/${product.id}`} className="btn btn-primary">View Details</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductComponent;
