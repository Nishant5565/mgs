import React from 'react'
import { Outlet } from 'react-router-dom'
import SideNav from '../Components/SideNav/SideNav'
const Layout = () => {
  return (
       <div className="flex">
        <div className=''>
        <SideNav />
        </div >
          <div className="flex-1">
          <Outlet />  
          </div>
       </div>
  )
}

export default Layout