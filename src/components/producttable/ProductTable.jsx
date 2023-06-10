import "./productList.css";
import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import AddProductForm from './AddProductForm';
import EditProductForm from './EditProductForm';
import ViewProduct from './ViewProductForm';

const ProductTable = () => {
  const [productData, setProductData] = useState([
    { 
      id: 1, 
      name: 'One Plus', 
      price: 10000, 
      status: 'in Stock' 
    },
    { 
      id: 2, 
      name: 'Poco', 
      price: 25000, 
      status: 'Out of Stock' 
    },
    { 
      id: 3, 
      name: 'Fire Boult', 
      price: 3500, 
      status: 'in Stock' 
    },
    { 
      id: 4, 
      name: 'Allen Sollie', 
      price: 1500, 
      status: 'Not Available' 
    },
    { 
      id: 5, 
      name: 'Nike', 
      price: 2000, 
      status: 'Out of Stock' 
    },
  ]);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isAddingProduct, setIsAddingProduct] = useState(false);
  const [isEditingProduct, setIsEditingProduct] = useState(false);
  const [isViewingProduct, setIsViewingProduct] = useState(false);

  const handleAddProduct = (newProduct) => {
    setProductData([...productData, newProduct]);
    setIsAddingProduct(false);
  };

  const handleEditProduct = (editedProduct) => {
    const updatedProductData = productData.map((product) =>
      product.id === editedProduct.id ? editedProduct : product
    );
    setProductData(updatedProductData);
    setIsViewingProduct(false);
    setIsEditingProduct(false);
  };

  const handleViewProduct = (product) => {
    setSelectedProduct(product);
    setIsViewingProduct(true);
  };
  
  const handleDeleteProduct = (productId) => {
    const updatedProductData = productData.filter((product) => product.id !== productId);
    setProductData(updatedProductData);
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 155 },
    { field: 'name', headerName: 'Product Name', width: 225 },
    { field: 'price', headerName: 'Price', width: 230 },
    { field: 'status', headerName: 'Status', width: 304 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 200,
      renderCell: (params) => (
        <>
          <button onClick={() => {
            setIsEditingProduct(true);
            setIsViewingProduct(false);
            handleViewProduct(params.row);
          }}>Edit</button>
          <button onClick={() => {
            setIsEditingProduct(false);
            setIsViewingProduct(true);
            handleViewProduct(params.row);
          }}>View</button>
          <button onClick={() => handleDeleteProduct(params.row.id)}>Delete</button>
        </>
      ),
    },
  ];

  return (
    <div className="productContainer">
      <div className="top">
        <h1>Product List</h1>
      </div>
      <div className="bottom">
        {isAddingProduct ? (
          <AddProductForm onAddProduct={handleAddProduct} products={productData} onCancel={() => setIsAddingProduct(false)} />
        ) : (
          <button onClick={() => setIsAddingProduct(true)} className="addButton">Add Product</button>
        )}

        {isEditingProduct && selectedProduct && (
          <EditProductForm
            product={selectedProduct}
            onEditProduct={handleEditProduct}
            onCancel={() => setIsEditingProduct(false)}
          />
        )}

        {isViewingProduct && selectedProduct && !isEditingProduct && (
          <ViewProduct product={selectedProduct} onClose={() => setSelectedProduct(null)} />
        )}

        <div className="dataGridContainer">
          <DataGrid rows={productData} columns={columns} pageSize={5} />
        </div>
      </div>
    </div>
  );
};

export default ProductTable;