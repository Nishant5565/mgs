import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './AcademicCalendar.css'; 

const AcademicCalendar = ({eventsData}) => {


  const [date, setDate] = useState(new Date());

  const getEventForDate = (date) => {
    return eventsData.find(
      (event) =>
        event.date.getFullYear() === date.getFullYear() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getDate() === date.getDate()
    );
  };

  return (
    <div className="bg-white rounded-[10px] shadow w-[600px] ">
      <h2 className="text-lg font-semibold rounded-t-[10px] bg-gray-100 py-3 px-4">Academic Calendar</h2>
      
      <Calendar
        onChange={setDate}
        value={date}
        tileContent={({ date, view }) => {
          if (view === 'month') {
            const event = getEventForDate(date);
            if (event) {
              return (
                <div className={`event-label ${event.color}`}>
                  {event.label}
                </div>
              );
            }
          }
          return null;
        }}
        tileClassName={({ date, view }) => {
          if (view === 'month') {
            const event = getEventForDate(date);
            if (event) {
              return `event-tile ${event.color}`;
            }
          }
          return null;
        }}
        className="react-calendar"
      />
    </div>
  );
};

export default AcademicCalendar;