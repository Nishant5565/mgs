import React from 'react'
import { Outlet } from 'react-router-dom'
import SideNav from '../Components/SideNav/SideNav'
import TopLogo from '@/Components/TopLogo/TopLogo'
const Layout = () => {
  return (
       <div className="flex">
        <div className=''>
        <SideNav />
        </div >
          <div className="flex-1">
          <TopLogo />

          <Outlet />  
          </div>
       </div>
  )
}

export default Layout