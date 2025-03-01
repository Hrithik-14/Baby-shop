// import React from 'react'
// import { Link } from 'react-router-dom'
// import { MdSpaceDashboard } from "react-icons/md";
// import { AiOutlineUnorderedList } from "react-icons/ai";
// import { CiUser } from "react-icons/ci";
// import { IoSettingsOutline } from "react-icons/io5";
// import { RiAdminFill } from "react-icons/ri";
// import './AdminNav.css'

// function AdminNav() {
//   return (
//     <>
//     <div className='adminnav'>
//         <nav className='list'>
//             <li><Link to="/admin"><RiAdminFill />Admin</Link></li>
//             <li><Link to= "/admin/dashboard"><MdSpaceDashboard />Dashboard</Link></li>
//             <li><Link to="/admin/order"><AiOutlineUnorderedList />Orders</Link></li>
//             <li><Link to="/admin/profile"><CiUser />Profile</Link></li>
//             <li><Link to="/admin/settings"><IoSettingsOutline />Settings</Link></li>
//         </nav>

//     </div>
//     </>
//   )
// }

// export default AdminNav
import React from 'react';
import { Link } from 'react-router-dom';
import { MdSpaceDashboard } from 'react-icons/md';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { CiUser } from 'react-icons/ci';
import { IoSettingsOutline } from 'react-icons/io5';
import { RiAdminFill } from 'react-icons/ri';
import './AdminNav.css';
// import Sidebar from '../Admin/Sidebar';
import { FaProductHunt } from "react-icons/fa";

function AdminNav() {
  return (
    <div className="admin-nav">
      <nav className="nav-list">
        <ul className="nav-items">
           <li className="nav-item">
            
              <RiAdminFill  style={{color:'lightblue'}} />
              <span>Admin</span>
            
          </li> 
          {/* <Sidebar/> */}
          <li className="nav-item">
            <Link to="/admin/dashboard" className="nav-link">
              <MdSpaceDashboard  className="nav-icon" />
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
            <FaProductHunt className="nav-icon"/>
              <span>Products</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default AdminNav;


