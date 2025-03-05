import React from 'react'
import { IoMdMenu } from "react-icons/io";
function TopNav() {
  return (
    <div style={{display:'flex', justifyContent:'space-between', width:'100%'}}>
        
        <IoMdMenu />
        <button >Log out</button>
    </div>
  )
}

export default TopNav