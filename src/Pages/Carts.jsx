import { useState } from "react";
import axios from "axios";

const Cart = ({ cartItems = [], clearCart }) => {
  const [paymentStatus, setPaymentStatus] = useState("");


  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price || 0), 0);

  const handlePayment = async () => {
    if (totalPrice === 0) {
      setPaymentStatus("Your cart is empty!");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/users", { amount: totalPrice });
      
      if (res.status === 201 || res.status === 200) {
        setPaymentStatus("Payment Successful!");
        if (typeof clearCart === "function") {
          clearCart();
        }
      } else {
        setPaymentStatus("Payment Failed!");
      }
    } catch (error) {
      setPaymentStatus("Payment Failed! Please try again.");
    }
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <div key={index}>
            <span>{item.name} - ${item.price}</span>
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}

      <h3>Total: ${totalPrice.toFixed(2)}</h3>
      <button onClick={handlePayment}>Proceed to Payment</button>
      {paymentStatus && <p>{paymentStatus}</p>}
    </div>
  );
};

export default Cart;


