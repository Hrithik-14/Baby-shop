import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/Login.jsx";
import Home from "./Pages/Home.jsx";
import Navbar from "./components/Navbar";
import Cart from "./Pages/Carts.jsx";
import ProductList from "./Pages/ProductList.jsx";
import Register from "./Pages/Register.jsx";
import Payment from "./Pages/Payment.jsx";
import Search from "./components/Search.jsx";
import Admin from "./Pages/Admin.jsx";
// import AdminNav from "./Pages/AdminNav.jsx";
import Dashboard from "./Admin/Dashboard.jsx";
import Settings from "./Admin/Settings.jsx";
import Order from "./Admin/Order.jsx";
import Profile from "./Admin/Profile.jsx";


function App() {
  return (
    <>
      
    <Router>
      
      <Navbar />
      {/* <AdminNav/> */}
      
      <Routes>
        <Route path="/search" element={<Search/>}/>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/order" element={<Order />} />
        <Route path="/admin/profile" element={<Profile />} />
        <Route path="/admin/settings" element={<Settings />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;


