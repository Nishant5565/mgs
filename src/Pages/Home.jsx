import React from 'react'
import Timetable from '../Components/TimeTable/TimeTable'
import AcademicDetails from '../Components/AcademicDetails/AcademicDetails'
import { timetableData,quote, homeWorkData,attendanceData, tests ,eventsData} from '../data.js'
const Home = () => {
  return (
    <div className="flex">
     <Timetable timetableData={timetableData} quote={quote}/>
     <AcademicDetails homeWorkData={homeWorkData} attendanceData={attendanceData} tests={tests} eventsData={eventsData}/>
    </div>
  )
}

export default Home