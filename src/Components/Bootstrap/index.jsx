import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Main from "../Main";

const BootLoader = () => {
  return (
    <Router>
      <Routes>
          <Route exact path="/" element={<Main />} />
      </Routes>
    </Router>
  )
}

export default BootLoader;