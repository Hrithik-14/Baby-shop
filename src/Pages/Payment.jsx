

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Payment.css";

const Payment = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");

  
  useEffect(() => {
    if (!userId) {
      navigate("/login");
      return;
    }

    const fetchCart = async () => {
      try {
        const res = await axios.get(`http://localhost:4001/users/${userId}`);
        setCartItems(res.data.cart || []);
      } catch (error) {
        console.error("Error fetching cart:", error);
        alert("Failed to fetch cart. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, [userId, navigate]);

 const handlePayment = async (e) => {
  e.preventDefault();

  if (cartItems.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  try {
    console.log("Cart Items before sending to orders:", cartItems);

    
    await Promise.all(
      cartItems.map(async (item) => {
        const response = await axios.post("http://localhost:4001/orders", {
          ...item,
          userId,
        });
        console.log("Order stored:", response.data);
      })
    );

    await axios.patch(`http://localhost:4001/users/${userId}`, { cart: [] });
    setCartItems([]);
    navigate("/paymentreport");
    alert("Payment Successful! Your order has been placed.");
    

    
  } catch (error) {
    console.error("Error processing payment:", error);
    alert("Payment failed. Please try again.");
  }
};


  return (
    <div className="payment-container">
      <h2>Billing Details</h2>
      {loading ? (
        <p>Loading cart...</p>
      ) : cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <form onSubmit={handlePayment}>
          <div className="cart-summary">
            <h3>Order Summary</h3>
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image1} alt={item.name} />
                <div className="cart-details">
                  <h4>{item.name}</h4>
                  <p>Price: ${item.price}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="form-group">
            <label>Card Details *</label>
            <input type="text" placeholder="Enter Card Number" required />
          </div>

          <button type="submit" onClick={() =>{navigate('/paymentreport')}} className="btn-submit">
            Pay Now
          </button>
        </form>
      )}
    </div>
  );
};

export default Payment;


