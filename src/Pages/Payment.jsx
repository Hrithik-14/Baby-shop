
import React, { useState } from "react";
import "./Payment.css";

const Payment = () => {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
 
  const [country, setCountry] = useState("United States (US)");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [card, setCard] = useState("");
  const [state, setState] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    alert("Payment Successfully!");
  };

  return (
    <div className="form-section">
      <h2>Customer Information</h2>
      <div className="form-group">
        <label htmlFor="">Username or Email Address *</label>
        <input
          type="text"
          id="username"
          placeholder="Username or Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>

      <h2>Billing Details</h2>
      <div className="form-group">
        <label htmlFor="">First Name *</label>
        <input
          type="text"
          id="firstName"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="">Last Name *</label>
        <input
          type="text"
          id=""
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="">Country</label>
        <select
          id="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value="United States (US)">United States (US)</option>
          <option value="Canada">Canada</option>
          <option value="United Kingdom">India</option>
          
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="address">House number and street name</label>
        <input
          type="text"
          id="address"
          placeholder="Street Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="city">Town / City</label>
        <input
          type="text"
          id="city"
          placeholder="Town/City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="state">State</label>
        <input
          type="text"
          id="state"
          placeholder="State"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="CardDetail">Card Detail</label>
        <input
          type="text"
          id="CardDetail"
          placeholder="Card Details"
          value={card}
          onChange={(e) => setCard(e.target.value)}
        />
      </div>

      <button className="btn-submit" onClick={handleSubmit}>
        Pay
      </button>
    </div>
  );
};

export default Payment;


