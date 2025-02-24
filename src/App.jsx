import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./components/Login.jsx";
import Home from "./Pages/Home.jsx";
import Navbar from "./components/Navbar";
import Products from "./Pages/Products";
import Cart from "./Pages/Carts.jsx";

function App() {
  return (
    <>
      
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products/>}/>
        <Route path="/carts" element={<Cart/>}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;


