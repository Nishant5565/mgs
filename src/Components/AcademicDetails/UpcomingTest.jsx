import React from 'react';

const UpcomingTests = ({tests}) => {

  return (     
     <div className=" rounded-[10px] shadow h-[290px]  overflow-hidden relative">
      <div className="flex justify-between rounded-t-[10px] items-center p-3 gap-10 mb-4 bg-gray-100 ">        
          <h2 className="text-lg font-semibold">Upcoming Tests</h2>
      </div>
      <div className=" space-y-2 px-3 mt-5 overflow-y-scroll h-[242px] pb-10">
        {tests.map((test, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-lg border border-gray-200 p-2  "
          >
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-medium text-gray-700">{test.title}</h3>
              <span className="text-xs text-gray-500">{test.date}</span>
            </div>
            <p className="text-xs text-gray-600 mt-1">{test.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingTests;
