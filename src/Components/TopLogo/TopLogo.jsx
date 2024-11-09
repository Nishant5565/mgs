import React from 'react'
import Logo from '../../assets/images/logo2.png'
import { FaBell } from "react-icons/fa";
const TopLogo = () => {

  return (
    <div className="flex items-center justify-around  h-28 shadow-[0px 4px 10px ]">
     <div className="flex items-center justify-center">     
     <div className="flex items-center justify-center after:content-[''] after:w-[2px] after:h-[50px] after:bg-gray-400 ">
     <img src={Logo} alt="logo" height={60} width={60}  />
     <h1 className="text-xl font-semibold text-gray-800 ml-10 mr-4">
           Mothers Global School
     </h1>
     </div>
     <div>
          <h2 className="text-sm text-gray-500 italic ml-4">
               Powered by Recor
          </h2>
     </div>
     </div>

     <div className="flex items-center justify-center">
          <button className='bg-[#6455D2] text-white font-semibold px-4 py-3 rounded-[10px]'>
               View performance analytics 
          </button>

          <div className="w-2 h-2 bg-red-500 rounded-full ml-4 relative -top-2 left-12">
          </div>

          <div className="ml-4 text-[#6455D2] hover:bg-[#6455D2] hover:text-white transition-all duration-500 p-2 rounded-full cursor-pointer mr-4">
               <FaBell size={24} />
          </div>
          <div className="w-12 h-12 rounded-full bg-[#6455D2] font-semibold text-white text-center flex  pb-1 items-center justify-center ml-4">
            <p className="text-xl">
              A
            </p>
          </div>
     </div>
    </div>
  )
}

export default TopLogo