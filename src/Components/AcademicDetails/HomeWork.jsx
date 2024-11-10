import React from 'react'
const HomeWork = ({homeWorkData}) => {
     const date = new Date().toLocaleDateString();
     const formattedDate = date.replaceAll("/", "-");
     return (
          <div className="shadow w-full h-[267px] rounded-[10px] ">
      <div className="flex justify-between rounded-t-[10px] items-center p-2 gap-10 mb-4 bg-gray-100">
              <h2 className="text-lg font-semibold">Daily Homework</h2>
              <div className="text-sm text-gray-800 bg-gray-300 px-2 py-1 rounded-[8px]">{formattedDate}</div>
            </div>
      
            {/* Homework list */}
            <div className="overflow-y-scroll h-[200px] px-6 w-[550px]">
              {homeWorkData.map((item, index) => (
               <div
               key={index}
               className={`flex items-start rounded-lg ${index !== homeWorkData.length - 1 ? 'border-b-2' : ''}`}
               >
                  <div className={`w-1 h-16 ${item.color} mr-2`} />
                  <div>
                    <h3 className="text-md font-semibold before:w-[4px]  text-gray-600 pb-1">{item.subject}</h3>
                    <p className="text-sm text-gray-500 ">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      };
      

export default HomeWork