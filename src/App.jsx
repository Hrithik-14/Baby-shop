import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/Login.jsx";
import Home from "./Pages/Home.jsx";
import Navbar from "./components/Navbar";
import Cart from "./Pages/Carts.jsx";
import ProductList from "./Pages/ProductList.jsx";
import Register from "./Pages/Register.jsx";
import Payment from "./Pages/Payment.jsx";


function App() {
  return (
    <>
      
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />} />
   
      </Routes>
    </Router>
    </>
  );
}

export default App;


