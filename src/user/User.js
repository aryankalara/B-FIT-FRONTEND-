import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserNavBar from './UserNavBar';
import UserGoals from './UserGoals';

function User() {
  return (
    <Router>
      <Routes>
        {/* Route for UserNavBar */}
        <Route path="/" element={<UserNavBar />} />
        
        {/* Route for UserGoals, passing the userName */}
        <Route path="/goals" element={<UserGoals userName="Aryan" />} />
      </Routes>
    </Router>
  );
}

export default User;
