import React, { useState } from 'react';
import "./UserGoals.css";
import { useNavigate } from 'react-router-dom';



const goalsList = [
  "Lose weight",
  "Maintain weight",
  "Gain weight",
  "Gain muscle",
  "Modify my diet",
  "Manage stress",
  "Increase step count"
];

const UserGoals = () => {
    const navigate = useNavigate();
  const [selectedGoals, setSelectedGoals] = useState([]);

  const handleGoalClick = (goal) => {
    if (selectedGoals.includes(goal)) {
      setSelectedGoals(selectedGoals.filter((g) => g !== goal));
    } else if (selectedGoals.length < 3) {
      setSelectedGoals([...selectedGoals, goal]);
    }
  };

  const handleNext = () => {
    navigate("/options")
    
    // You can add navigation logic here, for example using useNavigate
  };

  const handleBack = () => {
    console.log('Going back');
    // You can add navigation logic here as well
  };

  return (
    <div className="card">
      <div className="progress-bar"></div>
      <h2 className="title">Now for your goals.</h2>
      <p className="subtitle">Select up to 3 that are important to you, including one weight goal.</p>
      <div className="goals-container">
        {goalsList.map((goal, index) => (
          <button
            key={index}
            className={`goal-button ${selectedGoals.includes(goal) ? 'selected' : ''}`}
            onClick={() => handleGoalClick(goal)}
          >
            {goal}
          </button>
        ))}
      </div>
      <div className="button-group">
        <button className="back-button" onClick={handleBack}>BACK</button>
        <button className="next-button" onClick={handleNext}>NEXT</button>
      </div>
    </div>
  );
};

export default UserGoals;
