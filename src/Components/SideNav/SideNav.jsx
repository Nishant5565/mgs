import React from 'react';
import { FaBook, FaMoneyCheckAlt } from "react-icons/fa";
import { ImHome } from "react-icons/im";
import { IoDocumentTextOutline , IoNotifications} from "react-icons/io5";
import { FaUsers } from "react-icons/fa6";
import { TiDocumentText } from "react-icons/ti";
import { BiLogOutCircle } from "react-icons/bi";
import { Button } from '../ui/button';
import Cube from '../../assets/images/cube2.png';
import { Link } from 'react-router-dom';

const SideNav = () => {
  return (
    <aside className="w-52 h-screen bg-gray-800 text-white flex flex-col justify-between pt-3">
     <div className='flex flex-col items-center justify-center'>
          <img src={Cube} alt="logo" width={200} />
          <h2 className=" font-semibold text-gray-200 text-sm relative -top-4"
          >Rekor</h2>
     </div>

      <nav className="flex-1 space-y-4 px-6">
        <NavItem icon={<ImHome />} label="Home" />
        <NavItem icon={<FaBook />} label="Subjects" />
        <NavItem icon={<IoDocumentTextOutline />} label="Assignments" />
        <NavItem icon={<FaUsers />} label="Teachers" />
        <NavItem icon={<FaMoneyCheckAlt />} label="Fees" />
        <NavItem icon={<TiDocumentText />} label="Exam" />
        <NavItem icon={<IoNotifications />} label="Notice" />
      </nav>

      <div className="mt-6">
        <button className="flex items-center gap-6 bg-red-500 w-full py-2 px-4 rounded-md hover:bg-red-700">
          <BiLogOutCircle size={30} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};
// Subcomponent for individual navigation item
const NavItem = ({ icon, label }) => {
     const link = label.toLowerCase();
    return (
        <Link to={link} className="flex items-center gap-3 text-gray-300 hover:text-white px-3 w-[150px] py-2 rounded-[20px] transition-all duration-300 hover:bg-gray-700">
            <div>
                {icon}
            </div>
            <span className="text-md">{label}</span>
        </Link>
    );
};

export default SideNav;