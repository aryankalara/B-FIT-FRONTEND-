import React, { useState } from 'react';
import './ActivityLevel.css'; // Optional: CSS for styling
import { useNavigate } from 'react-router-dom';

const ActivityLevel = () => {
  const navigate = useNavigate();

  const [selectedLevel, setSelectedLevel] = useState('');

  const handleSelection = (level) => {
    setSelectedLevel(level);
  };
  const handleNext = () => {
    navigate("/weightform")
    
    // You can add navigation logic here, for example using useNavigate
  };

  return (
    <div className="activity-container">
      <h2>What is your baseline activity level?</h2>
      <p>Not including workouts—we count that separately</p>

      <div 
        className={`activity-option ${selectedLevel === 'Not Very Active' ? 'active' : ''}`} 
        onClick={() => handleSelection('Not Very Active')}
      >
        <strong>Not Very Active</strong>
        <p>Spend most of the day sitting (e.g., bank teller, desk job)</p>
      </div>

      <div 
        className={`activity-option ${selectedLevel === 'Lightly Active' ? 'active' : ''}`} 
        onClick={() => handleSelection('Lightly Active')}
      >
        <strong>Lightly Active</strong>
        <p>Spend a good part of the day on your feet (e.g., teacher, salesperson)</p>
      </div>

      <div 
        className={`activity-option ${selectedLevel === 'Active' ? 'active' : ''}`} 
        onClick={() => handleSelection('Active')}
      >
        <strong>Active</strong>
        <p>Spend a good part of the day doing some physical activity (e.g., food server, postal carrier)</p>
      </div>

      <div 
        className={`activity-option ${selectedLevel === 'Very Active' ? 'active' : ''}`} 
        onClick={() => handleSelection('Very Active')}
      >
        <strong>Very Active</strong>
        <p>Spend a good part of the day doing heavy physical activity (e.g., bike messenger, carpenter)</p>
      </div>

      <div className="navigation-buttons">
        <button className="back-button">BACK</button>
        <button className="next-button" onClick={handleNext}>NEXT</button>
      </div>
    </div>
  );
};

export default ActivityLevel;
