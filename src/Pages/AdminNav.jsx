import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { CiUser } from 'react-icons/ci';
import { RiAdminFill } from 'react-icons/ri';
import { FaProductHunt } from "react-icons/fa";
import './AdminNav.css';

function AdminNav() {
  return (
    <div className="admin-nav">
      <nav className="nav-list">
        <ul className="nav-items">
          {/* Admin Title */}
          <li className="nav-item admin-title">
            <RiAdminFill style={{ color: 'lightblue' }} />
            <span>Admin</span>
          </li> 

          {/* Dashboard Link */}
          <li className="nav-item">
            <Link to="/admin/dashboard" className="nav-link">
              <MdOutlineSpaceDashboard className="nav-icon" />
              <span>Dashboard</span>
            </Link>
          </li>

          {/* Orders Link */}
          <li className="nav-item">
            <Link to="/admin/order" className="nav-link">
              <AiOutlineUnorderedList className="nav-icon" />
              <span>Orders</span>
            </Link>
          </li>

          {/* User Profile Link */}
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




