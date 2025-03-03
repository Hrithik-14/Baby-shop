
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BiCartAdd } from "react-icons/bi";
import './ProductDetails.css';

const ProductDetail = () => {
  const { id } = useParams(); // Get product ID from URL
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:4001/products/${id}`);
        setProduct(res.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };
    fetchProduct();
  }, [id]);

  const addToCart = async () => {
    if (!userId) {
      alert("Please log in to add items to the cart.");
      return;
    }

    try {
      const userRes = await axios.get(`http://localhost:4001/users/${userId}`);
      let user = userRes.data;

      const existingItem = user.cart.find((item) => item.id === product.id);
      if (existingItem) {
        alert(`${product.name} is already in the cart!`);
        return;
      }

      const updatedCart = [...user.cart, product];
      await axios.patch(`http://localhost:4001/users/${userId}`, { cart: updatedCart });

      alert(`${product.name} added to cart!`);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  if (!product) {
    return <p>Loading product details...</p>;
  }

  return (
    <div className="product-detail-container">
      <button className="back-button" onClick={() => navigate(-1)}>Go Back</button>
      <div className="product-detail">
        <img src={product.image1} alt={product.name} />
        <div className="product-info">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p className="price">${product.price}</p>
          <button className="add-to-cart-btn" onClick={addToCart}>
            <BiCartAdd className="cart-icon" /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
