import React from 'react'
import { Link } from 'react-router-dom'
import { MdSpaceDashboard } from "react-icons/md";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { RiAdminFill } from "react-icons/ri";
import './AdminNav.css'

function AdminNav() {
  return (
    <div className='adminnav'>
        <nav className='list'>
            <li><Link to="/admin"><RiAdminFill />Admin</Link></li>
            <li><Link to= "/admin/dashboard"><MdSpaceDashboard />Dashboard</Link></li>
            <li><Link to="/admin/order"><AiOutlineUnorderedList />Orders</Link></li>
            <li><Link to="/admin/profile"><CiUser />Profile</Link></li>
            <li><Link to="/admin/settings"><IoSettingsOutline />Settings</Link></li>
        </nav>

    </div>
  )
}

export default AdminNav



