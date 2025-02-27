// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Login from "./components/Login.jsx";
// import Home from "./Pages/Home.jsx";
// import Navbar from "./components/Navbar";
// import Cart from "./Pages/Carts.jsx";
// import ProductList from "./Pages/ProductList.jsx";
// import Register from "./Pages/Register.jsx";
// import Payment from "./Pages/Payment.jsx";
// import Search from "./components/Search.jsx";
// import Admin from "./Pages/Admin.jsx";
// // import AdminNav from "./Pages/AdminNav.jsx";
// import Dashboard from "./Admin/Dashboard.jsx";
// import Settings from "./Admin/Settings.jsx";
// import Order from "./Admin/Order.jsx";
// import Profile from "./Admin/Profile.jsx";
// import AdminNav from "./Pages/AdminNav.jsx";


// function App() {
//   return (
//     <>
      
//     <Router>
      
//       <Navbar />
//       {/* <AdminNav/> */}
      
//       <Routes>
//         <Route path="/search" element={<Search/>}/>
//         <Route path="/" element={<Home />} />
//         <Route path="/products" element={<ProductList/>}/>
//         <Route path="/cart" element={<Cart/>}/>
//         <Route path="/payment" element={<Payment/>}/>
//         <Route path="/register" element={<Register />}/>
//         <Route path="/login" element={<Login />} />
//         <Route path="/admin" element={<Admin />} />
//         <Route path="/adminnav" element={<AdminNav/>}/>
//         <Route path="/admin/dashboard" element={<Dashboard />} />
//         <Route path="/admin/order" element={<Order />} />
//         <Route path="/admin/profile" element={<Profile />} />
//         <Route path="/admin/settings" element={<Settings />} />

//       </Routes>
//     </Router>
//     </>
//   );
// }

// export default App;

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
import Admin from "./Pages/Admin.jsx";
import Dashboard from "./Admin/Dashboard.jsx";
import Settings from "./Admin/Settings.jsx";
import Order from "./Admin/Order.jsx";
import Profile from "./Admin/Profile.jsx";
import AdminNav from "./Pages/AdminNav.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

const AppContent = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {/* Show Navbar only if it's not an Admin Route */}
      {!isAdminRoute && <Navbar />}

      <Routes>
        <Route path="/search" element={<Search />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Admin Routes - Only for Admins */}
        <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/order" element={<Order />} />
          <Route path="/admin/profile" element={<Profile />} />
          <Route path="/admin/settings" element={<Settings />} />
          <Route path="/adminnav" element={<AdminNav />} />
        </Route>

        {/* Unauthorized Access Page */}
        <Route path="/unauthorized" element={<h1>Unauthorized Access</h1>} />
      </Routes>
    </>
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
