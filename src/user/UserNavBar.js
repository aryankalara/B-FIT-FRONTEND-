import React, { useState } from 'react';
import './style.css';  // assuming you'll add this CSS file for styling

const UserNavBar = () => {
  const [firstName, setFirstName] = useState("");

  const handleNext = () => {
    // Handle next button functionality here
    // console.log("Next clicked");
    
  };

  const handleBack = () => {
    // Handle back button functionality here
    console.log("Back clicked");
  };

  return (



    
    <div className="card">
      <div className="progress-bar"></div>
      <h2 className="title">What’s your first name?</h2>
      <p className="subtitle">We’re happy you're here. Let’s get to know a little about you.</p>
      <form>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Enter your first name"
        />
      </form>
      <div className="button-group">
        <button className="back-button" onClick={handleBack}>BACK</button>
        <button className="next-button" onClick={handleNext}>NEXT</button>
      </div>
    </div>
  );
};

export default UserNavBar;
