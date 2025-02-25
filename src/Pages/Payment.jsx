
// import React, { useState } from 'react';
// // import { useHistory } from 'react-router-dom';

// const Payment = ({ cartItems, clearCart }) => {
//   const [paymentStatus, setPaymentStatus] = useState('');
//   // const history = useHistory();
//   const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

//   const handlePayment = () => {
    
//     setTimeout(() => {
//       setPaymentStatus('Payment Successful!');
//       clearCart();
//       setTimeout(() => history.push('/'), 2000);
//     }, 1500);
//   };

//   return (
//     <div style={{ padding: '1rem' }}>
//       <h2>Payment</h2>
//       <p>Total Amount: ${totalPrice}</p>
//       <button onClick={handlePayment}>Pay Now</button>
//       {paymentStatus && <p>{paymentStatus}</p>}
//     </div>
//   );
// };

// export default Payment;


import React from 'react'

function Payment() {
  return (
    <div>
      {/* <form action="" >
        <label htmlFor="">Full Name:</label>
        <input type="text" /> <br /> <br />
        <label htmlFor="">Type of Payment:</label>
        <select>
          <option value="">Choose the Way of Payment</option>
          <option value="">Online Payment</option>
          <option value="">Cash on Delivery</option>
        </select><br />
        <label htmlFor="">Card Number</label>
        <input type="number" /><br />
        <button  onClick={()=> alert("Payment Successfully")}>Pay</button>
      </form> */}

      <h1>Checkout</h1>
      <label htmlFor="">Customer information</label> <br /> <br />
      <input 
      style={{padding:'10px' }}
      type="text" 
      placeholder='Username or Email Addresss'
      />

    </div>
  )
}

export default Payment
