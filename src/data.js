// data.js
export const timetableData = [
     { id: 1, subject: "English", status: "completed" },
     { id: 2, subject: "Hindi", status: "completed" },
     { id: 3, subject: "Mathematics", status: "completed" },
     { id: 4, subject: "Mathematics", status: "completed" },
     { id: 5, subject: "Lunch Break", status: "break" },
     { id: 6, subject: "Social Science", status: "ongoing" },
     { id: 7, subject: "Games", status: "upcoming" },
     { id: 8, subject: "Science", status: "upcoming" },
     { id: 9, subject: "Library", status: "upcoming" },
   ];
   

export const quote ={
   quoteOfTheDay :'Study hard, for the well is deep, and our brains are shallow.',
   author: 'Richard Baxter, The Reformed Pastor'
}

export const attendanceData = {
   Weekly: { totalClasses: 6, attendedClasses: 4 },
   Monthly: { totalClasses: 20, attendedClasses: 15 },
   Overview: { totalClasses: 100, attendedClasses: 80 },
};
   
export const homeWorkData = [
   { id: 1, subject: "Science", description : "Practice all the questions given in the chapter end. Revise the chapter thoroughly." , 
      color: 'bg-green-300'
      },
   { id: 2, subject: "Mathematics", description : "Practice all the questions given in the chapter end. Revise the chapter thoroughly." , color: 'bg-red-300'},
   { id: 3, subject: "English", description : "Practice all the questions given in the chapter end. Revise the chapter thoroughly.",  color: 'bg-blue-300'},
   { id: 4, subject: "Hindi", description : "Practice all the questions given in the chapter end. Revise the chapter thoroughly.",  color: 'bg-yellow-300'},
   { id: 5, subject: "Social Science", description : "Practice all the questions given in the chapter end. Revise the chapter thoroughly.",  color: 'bg-pink-300'},
   { id: 6, subject: "Computer", description : "Practice all the questions given in the chapter end. Revise the chapter thoroughly.",  color: 'bg-purple-300'
   }
]

export const eventsData = [
  { date: new Date(2024, 10, 8), label: 'Class Test', color: 'blue' },
  { date: new Date(2024, 10, 25), label: 'Event', color: 'pink' },
  { date: new Date(2024, 10, 30), label: 'Holiday', color: 'green' },
];


export const tests = [
   {
     title: "Class Test 2",
     date: "13-08-2021",
     details: "Science: Chapter 1, 2, 3, 4.",
   },
   {
     title: "Test 1",
     date: "13-08-2021",
     details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
   },
   {
     title: "Test 1",
     date: "13-08-2021",
     details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
   },
   {
     title: "Test 1",
     date: "13-08-2021",
     details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
   },
 ];
