import React from 'react';
import { FaRegCircleCheck } from "react-icons/fa6";
import LoadingArrows from '../../assets/images/loading-arrows.png';
const Timetable = ({ timetableData , quote}) => {
  const today = new Date().toLocaleDateString();
  const todayDate = today.replace(/\//g, '-');

  return (
     <>

     <div className=" pb-2 shadow-lg w-[300px]">

     <div className="px-4 pb-6 pt-6">
        <h1 className=" font-semibold text-[18px] pb-4 text-gray-800">Hello, Aditya 👋</h1>
       <p className="text-[11px] font-semibold italic text-gray-700 mb-2">Quote of the Day</p>
       <p className="text-gray-500 timesNew">"{quote.quoteOfTheDay}"</p>
        <p className="text-gray-400 timesNew text-sm">- {quote.author}</p>
     </div>


     <div className="border-2 w-[260px] m-auto rounded-t-[10px] p-2 "
     style={{
        boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
     }}
     >
      <div className="flex justify-between items-center mb-4 ">
        <h2 className="text-xl font-bold text-gray-800">Timetable</h2>
        <div className="text-sm text-gray-800 bg-gray-300 px-2 py-1 rounded-[8px]">{todayDate}</div>
      </div>

      <ul className="space-y-[4px]">
        {timetableData.map((item) => (
          <li key={item.id} className={`flex justify-between items-center p-[6px] rounded-md shadow-sm ${item.status !== "ongoing" ? ' border-2 border-gray-100' : 'bg-blue-600 border-2 border-gray-100  '}`}>
            <span className={`text-[13px] font-medium w-full ${getStatusStyle(item.status)}`}>
              {item.subject}
            </span>
            {item.status === "completed" && <FaRegCircleCheck className="text-green-500" />}
            {item.status === "ongoing" && <span className="text-white text-sm flex gap-1 justify-center items-center mr-2">Ongoing <img src={LoadingArrows} width={20} alt="" className='white-filter' /></span>}
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
      return 'text-center text-gray-800';
    case 'upcoming':
      return 'text-gray-400';
    default:
      return '';
  }
};

export default Timetable;