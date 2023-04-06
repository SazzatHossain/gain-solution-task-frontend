import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Main from "../Pages/Main";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import UserProfile from "../Pages/UserProfile";
import EventNewForm from "../Pages/Event/EventNewPage";
import Header from "../Header";
import Footer from "../Footer";

const BootLoader = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Main/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/sign-up" element={<Registration/>}/>
        <Route exact path="/user-profile" element={<UserProfile/>}/>
        <Route exact path="/create-event" element={<EventNewForm/>}/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default BootLoader;