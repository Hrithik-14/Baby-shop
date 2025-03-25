import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null); // Track the product being edited
  const [editFormData, setEditFormData] = useState({ 
    name: "", 
    price: "", 
    category: "", 
    image1: "" 
  }); // Form data for editing
  const [isAddingProduct, setIsAddingProduct] = useState(false); // Track if adding a new product
  const [addFormData, setAddFormData] = useState({ 
    name: "", 
    price: "", 
    category: "",                                     
    image1: "" 
  }); // Form data for adding

  // Fetch products
  useEffect(() => {
    axios.get("http://localhost:4001/products")
      .then(response => setProducts(response.data))
      .catch(error => console.error("Error fetching products:", error));
  }, []);

  // Handle delete
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4001/products/${id}`);
      setProducts(products.filter(product => product.id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  // Handle edit button click
  const handleEditClick = (product) => {
    setEditingProduct(product);
    setEditFormData({ 
      name: product.name, 
      price: product.price, 
      category: product.category, 
      image1: product.image1 
    });
  };

  // Handle edit form input change
  const handleEditFormChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({ ...editFormData, [name]: value });
  };

  // Handle edit form submission
  const handleEditFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedProduct = { ...editingProduct, ...editFormData };
      await axios.put(`http://localhost:4001/products/${editingProduct.id}`, updatedProduct);
      setProducts(products.map(product => product.id === editingProduct.id ? updatedProduct : product));
      setEditingProduct(null); // Close the edit form
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  // Handle add product button click
  const handleAddProductClick = () => {
    setIsAddingProduct(true);
  };

  // Handle add form input change
  const handleAddFormChange = (e) => {
    const { name, value } = e.target;
    setAddFormData({ ...addFormData, [name]: value });
  };

  // Handle add form submission
  const handleAddFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4001/products", addFormData);
      setProducts([...products, response.data]);
      setIsAddingProduct(false); // Close the add form
      setAddFormData({ name: "", price: "", category: "", image1: "" }); // Reset form data
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="admin-container">
      <h2 className="admin-title">Admin Panel</h2>
      <button onClick={handleAddProductClick} className="add-product-button">
        Add Product
      </button>
      <table className="admin-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>{product.category}</td>
              <td>
                <img src={product.image1} alt={product.name} style={{ width: "50px", height: "50px" }} />
              </td>
              <td>
                <button
                  onClick={() => handleEditClick(product)}
                  className="edit-button"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="delete-button"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit Form */}
      {editingProduct && (
        <div className="edit-form-container">
          <h3>Edit Product</h3>
          <form onSubmit={handleEditFormSubmit}>
            <div>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={editFormData.name}
                onChange={handleEditFormChange}
                required
              />
            </div>
            <div>
              <label>Price:</label>
              <input
                type="number"
                name="price"
                value={editFormData.price}
                onChange={handleEditFormChange}
                required
              />
            </div>
            <div>
              <label>Category:</label>
              <input
                type="text"
                name="category"
                value={editFormData.category}
                onChange={handleEditFormChange}
                required
              />
            </div>
            <div>
              <label>Image URL:</label>
              <input
                type="text"
                name="image1"
                value={editFormData.image1}
                onChange={handleEditFormChange}
                required
              />
            </div>
            <button type="submit" className="save-button">Save</button>
            <button
              type="button"
              className="cancel-button"
              onClick={() => setEditingProduct(null)}
            >
              Cancel
            </button>
          </form>
        </div>
      )}

      {/* Add Product Form */}
      {isAddingProduct && (
        <div className="add-form-container">
          <h3>Add Product</h3>
          <form onSubmit={handleAddFormSubmit}>
            <div>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={addFormData.name}
                onChange={handleAddFormChange}
                required
              />
            </div>
            <div>
              <label>Price:</label>
              <input
                type="number"
                name="price"
                value={addFormData.price}
                onChange={handleAddFormChange}
                required
              />
            </div>
            <div>
              <label>Category:</label>
              <input
                type="text"
                name="category"
                value={addFormData.category}
                onChange={handleAddFormChange}
                required
              />
            </div>
            <div>
              <label>Image URL:</label>
              <input
                type="text"
                name="image1"
                value={addFormData.image1}
                onChange={handleAddFormChange}
                required
              />
            </div>
            <button type="submit" className="save-button">Add</button>
            <button
              type="button"
              className="cancel-button"
              onClick={() => setIsAddingProduct(false)}
            >
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Products;    