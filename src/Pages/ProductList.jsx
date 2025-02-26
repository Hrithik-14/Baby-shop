import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './ProductList.css';
import { BiCartAdd } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:4001/products");
        setProducts(res.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);


  const addToCart = async (product) => {
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

  return (
    <div className="container">
      <h1>Products</h1>
      {products.map((product) => (
        <div key={product.id} className="product">
          <img src={product.image1} alt={product.name} />
          <div className="product-details">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p className="price">${product.price}</p>

            <BiCartAdd
              onClick={() => addToCart(product)}
              style={{ height: '20px', width: '50px', cursor: 'pointer' }}
            />
          </div>

  
          <button
            onClick={async () => {
              await addToCart(product);
              navigate('/payment');
            }}
            style={{ height: '30px', width: '50px', borderRadius: '5px', background: 'green', color: 'white' }}
          >
            Buy
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
 
