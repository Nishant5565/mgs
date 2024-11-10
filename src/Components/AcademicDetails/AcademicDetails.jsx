import React from 'react'
import Attendance from './Attendance'

const AcademicDetails = () => {
  return (
    <div>
      {/* //! Top Section */}

      <div className="flex items-center justify-between px-4 topSectionShadow  ">
        <div className="">
          <Attendance />
        </div>
        <div>
          Daily Homework
        </div>
      </div>
      
        {/* //! Bottom Section */}  

        <div className="flex items-center justify-between px-4 topSectionShadow  ">
        <div>
          Academic Calendar
        </div>
        <div>
          Upcoming test
        </div>
      </div>
    </div>
  )
}

export default AcademicDetails