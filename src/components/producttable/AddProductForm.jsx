import "./addProduct.scss";
import React, { useState } from 'react';

const AddProductForm = ({ onAddProduct, products }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && price && status) {
      const newProduct = {
        id: products.length + 1,
        name,
        price,
        status
      };
      onAddProduct(newProduct);
      setName('');
      setPrice('');
      setStatus('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="addForm">
      <h2>Add Product</h2>
      <div className="formInput">
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="formInput">
        <label>Price:</label>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
      </div>
      <div className="formInput">
        <label>Status:</label>
        <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} />
      </div>
      <button type="submit" className="addButton">Add</button>
    </form>
  );
};

export default AddProductForm;