import React from 'react';
import "./viewProduct.scss";

const ViewProduct = ({ product, onClose }) => {
  return (
    <div className='viewForm'>
      <h2>Product Details</h2>
      <p>Name: {product.name}</p>
      <p>Price: {product.price}</p>
      <p>Status: {product.status}</p>
      <button onClick={onClose} className='viewButton'>Close</button>
    </div>
  );
};

export default ViewProduct;