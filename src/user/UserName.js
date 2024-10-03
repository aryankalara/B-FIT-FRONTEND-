import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserName.css';  // Import the CSS file

const UserName = () => {
  const [firstName, setFirstName] = useState('');
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/goals');
  };

  return (
    <div className="card">  {/* Add the card class here */}
      <h2 className="title">What’s your first name?</h2>  {/* Add title class */}
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="Enter your first name"
      />
      <div className="button-group"> {/* Add button-group class */}
        <button className="next-button" onClick={handleNext}>NEXT</button> {/* Add next-button class */}
      </div>
    </div>
  );
};

export default UserName;
