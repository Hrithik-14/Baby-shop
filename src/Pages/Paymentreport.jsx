import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Paymentreport.css';

const Paymentreport = () => {
    const userId = localStorage.getItem('userId');
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCart = async () => {
            if (!userId) return;
            try {
                const response = await axios.get(`http://localhost:4001/users/${userId}`);
                setCart(response.data.cart || []);
            } catch (error) {
                console.error('Error fetching cart:', error);
                setError('Failed to fetch cart. Please try again.');
            } finally {
                setLoading(false);
            }
        };
        fetchCart();
    }, [userId]);

    const totalPrice = cart.reduce((total, product) => {
        const price = product.price ? parseFloat(product.price) : 0;
        const quantity = product.quantity ? parseInt(product.quantity, 10) : 1;
        return total + price * quantity;
    }, 0);

    const handleConfirmOrder = async () => {
        try {
            await axios.patch(`http://localhost:4001/users/${userId}`, { cart: [] });
            alert('Order confirmed successfully!');
            navigate('/orders');
        } catch (error) {
            console.error('Error confirming order:', error);
            alert('Failed to confirm order. Please try again.');
        }
    };

    return (
        <div className="payment-report">
            <div className="payment-container">
                <h1 className="payment-title">Payment</h1>

                <div className="order-summary">
                    <h2 className="section-title">Order Summary</h2>
                    {loading ? (
                        <p className="loading-message">Loading...</p>
                    ) : error ? (
                        <p className="error-message">{error}</p>
                    ) : cart.length === 0 ? (
                        <p className="empty-cart-message">Your cart is empty.</p>
                    ) : (
                        <div className="cart-items">
                            {cart.map((product) => (
                                <div key={product.id} className="cart-item">
                                    <div className="item-details">
                                        <img
                                            src={product.image1} 
                                            alt={product.name}
                                            className="item-image"
                                        />
                                        <div className="item-info">
                                            <h3 className="item-name">{product.name}</h3>
                                            <p className="item-quantity">Quantity: {product.quantity}</p>
                                        </div>
                                    </div>
                                    <p className="item-price">
                                        ${((product.price || 0) * (product.quantity || 1)).toFixed(2)}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}
                    <div className="total-section">
                        <h3 className="total-label">Total</h3>
                        <p className="total-price">${totalPrice.toFixed(2)}</p>
                    </div>
                </div>

                <div className="payment-method">
                    <h2 className="section-title">Payment Method</h2>
                    <div className="method-options">
                        <div className="method-option">
                            <input
                                type="radio"
                                id="cashOnDelivery"
                                name="paymentMethod"
                                value="cashOnDelivery"
                                className="method-radio"
                                defaultChecked
                            />
                            <label htmlFor="cashOnDelivery" className="method-label">
                                Cash on Delivery
                            </label>
                        </div>
                    </div>
                </div>

                <div className="confirm-order">
                    <button
                        onClick={handleConfirmOrder}
                        className="confirm-button"
                    >
                        Confirm Order (${totalPrice.toFixed(2)})
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Paymentreport;


