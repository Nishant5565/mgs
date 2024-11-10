import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import Chart from './Chart';

const Attendance = ({attendanceData}) => {
  const [tab, setTab] = useState('Weekly');
  const { totalClasses, attendedClasses } = attendanceData[tab];   


  return (
    <div className=" rounded-[10px] shadow w-full max-w-md h-[267px]">
      <div className="flex justify-between rounded-t-[10px] items-center p-2 gap-10 mb-4 bg-gray-100">
        <h2 className="text-lg font-semibold">Attendance</h2>
        <div className="flex space-x-2">
          {['Weekly', 'Monthly', 'Overview'].map((option) => (
            <button
              key={option}
              onClick={() => setTab(option)}
              className={`px-3 py-1 text-sm rounded-[10px] ${
                tab === option
                  ? 'bg-gray-200 text-gray-900 font-semibold'
                  : 'text-gray-500'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center">
        {/* Doughnut Chart */}
          <Chart totalClasses={totalClasses} attendedClasses = {attendedClasses} />
      </div>
    </div>
  );
};

export default Attendance;
