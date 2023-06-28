import React from 'react'
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Feedback from "./components/Feedback/Feedback";
import Resume from './components/Resume/Resume'
import Filter from './components/Support/Ticket'
import Interview from './components/Interview/Interview'
import ScheduleInterview from './components/ScheduleInterview/ScheduleInterview';
import Ticket from './components/Support/Ticket';
import AddUser from './components/Master/User/AddUser';

function AppRoutes() {
  return (
    <>
    <Routes>
    <Route path="/resumemakerui" element={<Dashboard/>}></Route>
    <Route path="/resumemakerui/feedback" element={<Feedback/>}></Route>
    <Route path="/resumemakerui/resume" element={<Resume/>}></Route>
    <Route path="/resumemakerui/filter" element={<Filter/>}></Route> 
    <Route path="/resumemakerui/interview-details" element={<Interview/>}></Route>
    <Route path="/resumemakerui/calendar" element={<ScheduleInterview/>}></Route>
    <Route path="/resumemakerui/user" element={<AddUser/>}></Route>
    <Route path="/resumemakerui/ticket" element={<Ticket/>}></Route>
    </Routes>
  </>
  )
}

export default AppRoutes