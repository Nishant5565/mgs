import React from 'react'
import Timetable from '../Components/TimeTable/TimeTable'
import { timetableData } from '../data.js'
import {quote} from '../data.js'
import AcademicDetails from '../Components/AcademicDetails/AcademicDetails'
const Home = () => {
  return (
    <div className="flex">
     <Timetable timetableData={timetableData} quote={quote}/>
     <AcademicDetails />
    </div>
  )
}

export default Home