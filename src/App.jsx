import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Pages/Layout'
import Subjects from './Pages/Subjects'
import Exam from './Pages/Exam'
import Assignments from './Pages/Assignments'
import Fees from './Pages/Fees'
import Home from './Pages/Home'
import Teacher from './Pages/Teacher'
import Notice from './Pages/Notice'
function App() {
  const [user, setUser] = useState(null)
  return (
    <Router basename='/'>
      <Routes>
      <Route path="/" element={<Layout />}>
          <Route index path="home" element={<Home />} />
          <Route path="subjects" element={<Subjects />} />
          <Route path="exam" element={<Exam />} />
          <Route path="assignments" element={<Assignments />} />
          <Route path="fees" element={<Fees />} />
          <Route path="teachers" element={<Teacher />} />
          <Route path="notice" element={<Notice />} />

        </Route>
      </Routes>
    </Router>
  )
}

export default App

