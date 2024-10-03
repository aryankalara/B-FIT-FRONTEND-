import React, { useState } from 'react';
import './WeightForm.css'; // Optional: CSS for styling
import { useNavigate } from 'react-router-dom';

const WeightForm = () => {
  const [heightFeet, setHeightFeet] = useState('');
  const [heightInches, setHeightInches] = useState('');
  const [currentWeight, setCurrentWeight] = useState('');
  const [goalWeight, setGoalWeight] = useState('');
  const [unit, setUnit] = useState('lbs'); // Unit management (lbs by default)

  const navigate = useNavigate();

  const handleHeightFeetChange = (event) => {
    setHeightFeet(event.target.value);
  };

  const handleHeightInchesChange = (event) => {
    setHeightInches(event.target.value);
  };

  const handleCurrentWeightChange = (event) => {
    setCurrentWeight(event.target.value);
  };

  const handleGoalWeightChange = (event) => {
    setGoalWeight(event.target.value);
  };
  const handleNext = () => {
    navigate("/calorie")
    
    // You can add navigation logic here, for example using useNavigate
  };

  const toggleUnit = () => {
    setUnit((prevUnit) => (prevUnit === 'lbs' ? 'kg' : 'lbs'));
  };

  return (
    <div className="weight-form-container">
      <h2>How tall are you?</h2>
      <div className="height-section">
        <input 
          type="number" 
          value={heightFeet} 
          onChange={handleHeightFeetChange} 
          placeholder="Height (feet)" 
          className="height-input" 
        />
        <input 
          type="number" 
          value={heightInches} 
          onChange={handleHeightInchesChange} 
          placeholder="Height (inches)" 
          className="height-input"
        />
      </div>
      <a href="#toggle-units" className="unit-toggle" onClick={toggleUnit}>
        Change units to {unit === 'lbs' ? 'centimeters' : 'feet/inches'}
      </a>

      <h2>How much do you weigh?</h2>
      <div className="weight-section">
        <input 
          type="number" 
          value={currentWeight} 
          onChange={handleCurrentWeightChange} 
          placeholder={`Current weight (${unit})`}
          className="weight-input"
        />
      </div>
      <a href="#toggle-units" className="unit-toggle" onClick={toggleUnit}>
        Change units to {unit === 'lbs' ? 'kilograms/stone' : 'pounds'}
      </a>

      <h2>What's your goal weight?</h2>
      <div className="goal-weight-section">
        <input 
          type="number" 
          value={goalWeight} 
          onChange={handleGoalWeightChange} 
          placeholder={`Goal weight (${unit})`} 
          className="weight-input"
        />
      </div>

      <div className="navigation-buttons">
        <button className="back-button">BACK</button>
        <button className="next-button" disabled={!heightFeet || !currentWeight || !goalWeight} onClick={handleNext}>NEXT</button>
      </div>
    </div>
  );
};

export default WeightForm;
