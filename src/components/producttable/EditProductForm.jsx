import "./editProduct.scss";
import React, { useState, useEffect } from 'react';

const EditProductForm = ({ product, onEditProduct, onCancel }) => {
  const [editedProduct, setEditedProduct] = useState(product);


  useEffect(() => {
    setEditedProduct(product);
  }, [product]);

  const handleSubmit = (event) => {
    event.preventDefault();
    onEditProduct(editedProduct);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedProduct({ ...editedProduct, [name]: value });
  };

  if (!product) {
    return <div>Loading...</div>;
  }
  
  return (
    <form onSubmit={handleSubmit} className="editForm">
      <h2>Edit Product</h2>
      <div className="formInput">
        <label>Name:</label>
        <input type="text" value={editedProduct.name} onChange={handleInputChange} name="name" />
      </div>
      <div className="formInput">
        <label>Price:</label>
        <input type="number" value={editedProduct.price} onChange={handleInputChange} name="price" />
      </div>
      <div className="formInput">
        <label>Status:</label>
        <input type="text" value={editedProduct.status} onChange={handleInputChange} name="status"/>
      </div>
      <div className="editButton">
      <button type="submit"onClick={handleSubmit}  className="saveButton">Save</button>
      <button type="button" onClick={onCancel} className="cancelButton">Cancel</button>
      </div>
    </form>
  );
};

export default EditProductForm;