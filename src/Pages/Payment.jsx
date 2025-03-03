
// import React, { useState } from "react";
// import "./Payment.css";

// const Payment = () => {
//   const [username, setUsername] = useState("");
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
 
//   const [country, setCountry] = useState("United States (US)");
//   const [address, setAddress] = useState("");
//   const [city, setCity] = useState("");
//   const [card, setCard] = useState("");
//   const [state, setState] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     alert("Payment Successfully!");
//   };

//   return (
//     <div className="form-section">
//       <h2>Customer Information</h2>
//       <div className="form-group">
//         <label htmlFor="">Username or Email Address *</label>
//         <input
//           type="text"
//           id="username"
//           placeholder="Username or Email"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//         />
//       </div>

//       <h2>Billing Details</h2>
//       <div className="form-group">
//         <label htmlFor="">First Name *</label>
//         <input
//           type="text"
//           id="firstName"
//           placeholder="First Name"
//           value={firstName}
//           onChange={(e) => setFirstName(e.target.value)}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="">Last Name *</label>
//         <input
//           type="text"
//           id=""
//           placeholder="Last Name"
//           value={lastName}
//           onChange={(e) => setLastName(e.target.value)}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="">Country</label>
//         <select
//           id="country"
//           value={country}
//           onChange={(e) => setCountry(e.target.value)}
//         >
//           <option value="United States (US)">United States (US)</option>
//           <option value="Canada">Canada</option>
//           <option value="United Kingdom">India</option>
          
//         </select>
//       </div>
//       <div className="form-group">
//         <label htmlFor="address">House number and street name</label>
//         <input
//           type="text"
//           id="address"
//           placeholder="Street Address"
//           value={address}
//           onChange={(e) => setAddress(e.target.value)}
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="city">Town / City</label>
//         <input
//           type="text"
//           id="city"
//           placeholder="Town/City"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="state">State</label>
//         <input
//           type="text"
//           id="state"
//           placeholder="State"
//           value={state}
//           onChange={(e) => setState(e.target.value)}
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="CardDetail">Card Detail</label>
//         <input
//           type="text"
//           id="CardDetail"
//           placeholder="Card Details"
//           value={card}
//           onChange={(e) => setCard(e.target.value)}
//         />
//       </div>

//       <button className="btn-submit" onClick={handleSubmit}>
//         Pay
//       </button>
//     </div>
//   );
// };

// export default Payment;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Payment.css";

const Payment = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");

  // Fetch cart items for the logged-in user
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

    // Store ordered items in the "orders" collection on JSON-Server
    await Promise.all(
      cartItems.map(async (item) => {
        const response = await axios.post("http://localhost:4001/orders", {
          ...item,
          userId,
        });
        console.log("Order stored:", response.data);
      })
    );

    // Clear cart after successful payment
    await axios.patch(`http://localhost:4001/users/${userId}`, { cart: [] });
    setCartItems([]);
    alert("Payment Successful! Your order has been placed.");
    
    // Navigate to order confirmation or orders page
    navigate("/orders");
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

          <button type="submit" className="btn-submit">
            Pay Now
          </button>
        </form>
      )}
    </div>
  );
};

export default Payment;

