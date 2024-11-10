import React from 'react'
import Attendance from './Attendance'
import HomeWork from './HomeWork'
import AcademicCalendar from './AcademicCalendar'
import UpcomingTests from './UpcomingTest'
const AcademicDetails = ({homeWorkData, attendanceData, tests,eventsData }) => {
  return (
    <div className="flex flex-col gap-4 px-4 pt-4">
      {/* //! Top Section */}

      <div className="flex items-center justify-between gap-6 ">
        <div className="">
          <Attendance attendanceData = {attendanceData} />
        </div>
        <div>
          <HomeWork homeWorkData = {homeWorkData} />
        </div>
      </div>
      
        {/* //! Bottom Section */}  

        <div className="flex items-center justify-between gap-6  ">
        <div>
         <AcademicCalendar eventsData={eventsData}/>
        </div>
        <div>
          <UpcomingTests tests= {tests} />
        </div>
      </div>
    </div>
  )
}

export default AcademicDetails