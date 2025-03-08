import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Login from "./components/Login.jsx";
import Home from "./Pages/Home.jsx";
import Navbar from "./components/Navbar";
import Cart from "./Pages/Carts.jsx";  
import ProductList from "./Pages/ProductList.jsx";
import Register from "./Pages/Register.jsx";
import Payment from "./Pages/Payment.jsx";
import Search from "./components/Search.jsx";
import Admin from "./Admin/Admin.jsx";

import Order from "./Admin/Order.jsx";
import Profile from "./Admin/Profile.jsx";
import ProfileDetail from "./Admin/ProfileDetails.jsx";
import AdminNav from "./Pages/AdminNav.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Products from "./Admin/Products.jsx";
import ProductDetail from "./Pages/ProductDetails.jsx";
import Paymentreport from "./Pages/Paymentreport.jsx";
import OrderDetails from "./Admin/OrderDetails.jsx";
import Dashboard from "./Admin/Dashboard.jsx";

const AppContent = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <div className="app-container">
      
      {!isAdminRoute && <Navbar />}

      <div className="main-content">
        {/* Show Admin Sidebar on admin pages */}
        {isAdminRoute && <AdminNav />}

        <div className="page-content">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/productlist" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/paymentreport" element={<Paymentreport />} />

            {/* Profile Details (Accessible by all users) */}
            <Route path="/profile/:id" element={<ProfileDetail />} /> 

            {/* Admin Routes (Protected) */}
            <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
              <Route path="/admin" element={<Admin />} />
              <Route path="/admin/dashboard" element={<Dashboard />} />
              <Route path="/admin/order" element={<Order />} />
              <Route path="/admin/profile" element={<Profile />} />
              <Route path="/admin/profile/:id" element={<ProfileDetail />} />
              <Route path="/admin/products" element={<Products />} />
              <Route path="/admin/order/:id" element={<OrderDetails />} />
            </Route>

            {/* Unauthorized Route */}
            <Route path="/unauthorized" element={<h1>Unauthorized Access</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;




