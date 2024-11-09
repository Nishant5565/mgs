import React from 'react'
import HomeSection from '../Components/Home/Home'
import Timetable from '../Components/TimeTable/TimeTable'
import { timetableData } from '../data.js'
import {quote} from '../data.js'
const Home = () => {
  return (
    <>
     <Timetable timetableData={timetableData} quote={quote}/>
    </>
  )
}

export default Home