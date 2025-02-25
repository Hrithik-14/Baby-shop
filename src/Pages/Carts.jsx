import { useState } from "react";
import axios from "axios";

const Cart = ({ cartItems = [], clearCart }) => {
  const [paymentStatus, setPaymentStatus] = useState("");

  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price || 0), 0).toFixed(2);

  const handlePayment = async () => {
    if (totalPrice <= 0) {
      setPaymentStatus("Your cart is empty!");
      return;
    }

    try {
      const res = await axios.post("http://localhost:3001/orders", { amount: totalPrice });

      if (res.status === 201 || res.status === 200) {
        setPaymentStatus("Payment Successful!");
        clearCart?.();
      } else {
        setPaymentStatus("Payment Failed!");
      }
    } catch (error) {
      setPaymentStatus("Payment Failed! Please try again.");
    }
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Your Cart</h2>
      {cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <span>{item.name} - ${parseFloat(item.price).toFixed(2)}</span>
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}

      <h3>Total: ${totalPrice}</h3>
      <button 
        onClick={handlePayment} 
        style={{
          padding: "10px 15px",
          backgroundColor: "#28a745",
          color: "white",
          border: "none",
          cursor: "pointer",
          borderRadius: "5px",
          marginTop: "10px"
        }}
      >
        Proceed to Payment
      </button>
      {paymentStatus && <p style={{ marginTop: "10px" }}>{paymentStatus}</p>}
    </div>
  );
};

export default Cart;


