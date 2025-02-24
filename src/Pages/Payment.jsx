
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Payment = ({ cartItems, clearCart }) => {
  const [paymentStatus, setPaymentStatus] = useState('');
  const history = useHistory();
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  const handlePayment = () => {
    
    setTimeout(() => {
      setPaymentStatus('Payment Successful!');
      clearCart();
      setTimeout(() => history.push('/'), 2000);
    }, 1500);
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Payment</h2>
      <p>Total Amount: ${totalPrice}</p>
      <button onClick={handlePayment}>Pay Now</button>
      {paymentStatus && <p>{paymentStatus}</p>}
    </div>
  );
};

export default Payment;
