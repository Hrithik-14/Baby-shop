import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Paymentreport.css';

const Paymentreport = () => {
    const userId = localStorage.getItem('userId'); 
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCart = async () => {
            if (!userId) return;
            try {
                const response = await axios.get(`http://localhost:4001/users/${userId}`);
                setCart(response.data.cart || []);
            } catch (error) {
                console.error('Error fetching cart:', error);
                alert('Failed to fetch cart. Please try again.');
            } finally {
                setLoading(false);
            }
        };
        fetchCart();
    }, [userId]);

    // Calculate total price correctly
    const totalPrice = cart.reduce((total, product) => {
        const price = product.price ? parseFloat(product.price) : 0; // Ensure price is a number
        const quantity = product.quantity ? parseInt(product.quantity, 10) : 1; // Ensure quantity is a number
        return total + price * quantity;
    }, 0);

    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold text-center mb-8">Payment</h1>

                {/* Order Summary */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                    {loading ? (
                        <p>Loading...</p>
                    ) : cart.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        <div className="space-y-4">
                            {cart.map((product) => (
                                <div key={product.id} className="flex justify-between items-center border-b pb-4">
                                    <div className="flex items-center">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-16 h-16 object-cover rounded-lg"
                                        />
                                        <div className="ml-4">
                                            <h3 className="text-lg font-medium">{product.name}</h3>
                                            <p className="text-sm text-gray-600">Quantity: {product.quantity}</p>
                                        </div>
                                    </div>
                                    <p className="text-lg font-semibold">
                                        ${((product.price || 0) * (product.quantity || 1)).toFixed(2)}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}
                    <div className="mt-6 flex justify-between items-center">
                        <h3 className="text-xl font-semibold">Total</h3>
                        <p className="text-xl font-semibold">${totalPrice.toFixed(2)}</p>
                    </div>
                </div>

                {/* Payment Method */}
                <div className="bg-white p-6 rounded-lg shadow-md mt-8">
                    <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="cashOnDelivery"
                                name="paymentMethod"
                                value="cashOnDelivery"
                                className="w-5 h-5"
                                defaultChecked
                            />
                            <label htmlFor="cashOnDelivery" className="ml-2 text-lg">
                                Cash on Delivery
                            </label>
                        </div>
                    </div>
                </div>

                {/* Confirm Order Button */}
                <div className="mt-8 text-center">
                    <Link
                        to={`/cart?total=${totalPrice.toFixed(2)}`}
                        className="bg-green-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-600 transition duration-300"
                    >
                        Confirm Order (${totalPrice.toFixed(2)})
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Paymentreport;
