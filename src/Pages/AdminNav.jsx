import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { CiUser } from 'react-icons/ci';
import { RiAdminFill } from 'react-icons/ri';
import { FaProductHunt } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import './AdminNav.css';

function AdminNav() {
  const navigate = useNavigate(); 

  const handleLogout = () => {
    
    localStorage.removeItem("userToken"); 
    localStorage.removeItem("userData");

    
    navigate("/login");
  };

  return (
    <div className="admin-nav">
      <nav className="nav-list">
        <ul className="nav-items">
        <li className="nav-item logout" onClick={handleLogout}>
            <FiLogOut className="nav-icon" />
            <span>Logout</span>
          </li>
          <li className="nav-item admin-title">
            <RiAdminFill style={{ color: 'lightblue' }} />
            
            <span>Admin</span>
          </li> 


          <li className="nav-item">
            <Link to="/admin/dashboard" className="nav-link">
              <MdOutlineSpaceDashboard className="nav-icon" />
              <span>Dashboard</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/admin/order" className="nav-link">
              <AiOutlineUnorderedList className="nav-icon" />
              <span>Orders</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/admin/profile" className="nav-link">
              <CiUser className="nav-icon" />
              <span>User</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/admin/products" className="nav-link">
              <FaProductHunt className="nav-icon" />
              <span>Products</span>
            </Link>
          </li>

          

        </ul>
      </nav>
    </div>
  );
}

export default AdminNav;


