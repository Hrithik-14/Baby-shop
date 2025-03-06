import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Carts.css';

const Carts = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    if (!userId) {
      navigate('/login');
      return;
    }

    const fetchCart = async () => {
      try {
        const res = await axios.get(`http://localhost:4001/users/${userId}`);
        setCartItems(res.data.cart || []);
      } catch (error) {
        console.error('Error fetching cart:', error);
        alert('Failed to fetch cart. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, [userId, navigate]);

  const removeFromCart = async (id) => {
    try {
      const updatedCart = cartItems.filter(item => item.id !== id);
      setCartItems(updatedCart);

      await axios.patch(`http://localhost:4001/users/${userId}`, { cart: updatedCart });

      alert('Item removed from cart!');
    } catch (error) {
      console.error('Error removing item from cart:', error);
      alert('Failed to remove item. Please try again.');
    }
  };

  const updateQuantity = async (id, change) => {
    const updatedCart = cartItems.map(item =>
      item.id === id
        ? { ...item, quantity: Math.max(1, (item.quantity || 1) + change) } 
        : item
    );
    setCartItems(updatedCart);

    try {
      await axios.patch(`http://localhost:4001/users/${userId}`, { cart: updatedCart });
    } catch (error) {
      console.error('Error updating quantity:', error);
      alert('Failed to update quantity. Please try again.');
    }
  };

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {loading ? (
        <p>Loading...</p>
      ) : cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image1} alt={item.name} className="cart-item-image" />
            <div className="cart-details">
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <p className="price">${item.price}</p>
              <div className="quantity-controls">
                <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                <span>{item.quantity || 1}</span> 
                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="remove-btn">
                Remove
              </button>
            </div>
          </div>
        ))
      )}

      {cartItems.length > 0 && (
        <button className="checkout-btn" onClick={() => navigate('/payment')}>
          Proceed to Payment
        </button>
      )}
    </div>
  );
};

export default Carts;
