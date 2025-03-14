import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Payment.css';

const Payment = () => {
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
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
                setError('Failed to fetch cart. Please try again.');
            } finally {
                setLoading(false);
            }
        };

        fetchCart();
    }, [userId, navigate]);

    const handlePayment = async (e) => {
        e.preventDefault();

        if (cartItems.length === 0) {
            alert('Your cart is empty!');
            return;
        }

        try {
            
            const order = cartItems.map(item => ({
                ...item,
                userId,
                date: new Date().toISOString(),
                status: 'Processing', 
            }));

            
            await axios.patch(`http://localhost:4001/users/${userId}`, {
                orders: [...order],
                cart: [], 
            });

            setCartItems([]); 
            alert('Payment Successful! Your order has been placed.');
            navigate('/paymentreport');
        } catch (error) {
            console.error('Error processing payment:', error);
            alert(`Payment failed. Reason: ${error.message || 'Unknown error'}`);
        }
    };

    return (
        <div className="payment-container">
            <h2>Billing Details</h2>
            {loading ? (
                <p>Loading cart...</p>
            ) : error ? (
                <p>{error}</p>
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

                    <button type="submit" className="btn-submit">
                        Pay Now
                    </button>
                </form>
            )}
        </div>
    );
};

export default Payment;





