import React from 'react';
import AdminNav from '../Pages/AdminNav';
import { Outlet } from 'react-router-dom';

function Admin() {
  return (
    <div style={{ display: 'flex' }}>
      <AdminNav />
      <div style={{marginLeft: '250px',padding :'20px',width: 'calc(100% - 250px)'}}>
        <Outlet />
      </div>
    </div>
  );
}

export default Admin;



