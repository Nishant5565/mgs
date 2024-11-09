import React from 'react';
import { FaRegCircleCheck } from "react-icons/fa6";
import TopLogo from '../TopLogo/TopLogo';
const Timetable = ({ timetableData , quote}) => {
  const today = new Date().toLocaleDateString();

  return (
     <>

     <TopLogo />
     <div className=" h-full rounded-[10px] shadow-lg w-[300px]">

     <div className="rounded-lg shadow-sm ">
       <p className="text-lg font-semibold text-gray-700 mb-2">Quote of the Day</p>
       <p className="text-gray-600 italic">"{quote.quoteOfTheDay}"</p>
     </div>


     <div className="border-2 w-[280px] m-auto rounded-t-[10px] p-2">
      <div className="flex justify-between items-center mb-6 ">
        <h2 className="text-xl font-bold text-gray-800">Timetable</h2>
        <div className="text-sm text-gray-500">{today}</div>
      </div>

      <ul className="space-y-[8px]">
        {timetableData.map((item) => (
          <li key={item.id} className={`flex justify-between items-center p-2 rounded-md shadow-sm ${item.status !== "ongoing" ? ' border-2 border-gray-100' : 'bg-blue-600 border-2 border-gray-100 '}`}>
            <span className={`text-[13px] font-medium ${getStatusStyle(item.status)}`}>
              {item.subject}
            </span>
            {item.status === "completed" && <FaRegCircleCheck className="text-green-500" />}
            {item.status === "ongoing" && <span className="text-white text-sm ">Ongoing</span>}
          </li>
        ))}
      </ul>
     </div>
    </div>
     
     </>

  );
};

// Utility function to get style based on status
const getStatusStyle = (status) => {
  switch (status) {
    case 'completed':
      return 'text-gray-700';
    case 'ongoing':
      return 'text-white font-semibold';
    case 'break':
      return 'text-yellow-500';
    case 'upcoming':
      return 'text-gray-400';
    default:
      return '';
  }
};

export default Timetable;