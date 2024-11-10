import React from 'react'
import { Outlet } from 'react-router-dom'
import SideNav from '../Components/SideNav/SideNav'
import TopSection from '@/Components/TopSection/TopSection'
const Layout = () => {
  return (
       <div className="flex">
        <div className=''>
        <SideNav />
        </div >
          <div className="flex-1">
          <TopSection />

          <Outlet />  
          </div>
       </div>
  )
}

export default Layout