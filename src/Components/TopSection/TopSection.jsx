import React from 'react'
import Logo from '../../assets/images/logo2.png'
import { FaBell } from "react-icons/fa";
import {
     Popover,
     PopoverContent,
     PopoverTrigger,
   } from "../../Components/ui/popover";

const TopSection = () => {

  return (
    <div className="flex items-center justify-between  px-4 h-24 topSectionShadow  ">
     <div className="flex items-center justify-center">     
     <div className="flex items-center justify-center after:content-[''] after:w-[2px] after:h-[33px] after:bg-gray-400 ">
     <img src={Logo} alt="logo" height={40} width={40}  />
     <h1 className="text-base font-semibold text-gray-800 ml-10 mr-4">
           Mothers Global School
     </h1>
     </div>
     <div>
          <h2 className="text-[12px] text-gray-500 italic ml-4">
               Powered by Recor
          </h2>
     </div>
     </div>

     <div className="flex items-center justify-center">
          <button className='bg-[#6455D2] text-white font-semibold px-3 py-3 rounded-[10px]'>
               View performance analytics 
          </button>

          <div className="w-2 h-2 bg-red-500 rounded-full ml-4 relative -top-2 left-12">
          </div>

          <div className="ml-4 text-[#6455D2] hover:bg-[#6455D2] hover:text-white transition-all duration-500 p-2 rounded-full cursor-pointer mr-4 h-10 w-10 flex  justify-center">
          <Popover>
          <PopoverTrigger>
               <FaBell size={20} />
          </PopoverTrigger>
          <PopoverContent className="bg-white shadow-lg rounded-[10px] p-4 absolute -left-60">
               
               <div className="p-4 space-y-4 ">
               <h1 className="text-lg font-semibold text-gray-800 text-center">
                    All Your Notifications
               </h1>
               </div>

          </PopoverContent>
          </Popover>

          </div>
          <div className="w-10 h-10 rounded-full bg-[#6455D2] font-semibold text-white text-center flex  pb-1 items-center justify-center ml-4 cursor-pointer">
            <p className="text-xl">
              A
            </p>
          </div>
     </div>
    </div>
  )
}

export default TopSection