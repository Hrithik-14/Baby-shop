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

function AdminNav() {
  return (
    <div className="admin-nav">
      <nav className="nav-list">
        <ul className="nav-items">
          <li className="nav-item">
            <Link to="/admin" className="nav-link">
              <RiAdminFill className="nav-icon" />
              <span>Admin</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin/dashboard" className="nav-link">
              <MdSpaceDashboard className="nav-icon" />
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
              <span>Profile</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin/settings" className="nav-link">
              <IoSettingsOutline className="nav-icon" />
              <span>Settings</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default AdminNav;


