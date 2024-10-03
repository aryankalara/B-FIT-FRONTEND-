import React, { useState } from 'react';
import './Barriers.css';  // You can create a CSS file for styling
import { useNavigate } from 'react-router-dom';

const barriersList = [
  "Lack of time",
  "The regimen was hard to follow",
  "Healthy diets lack variety",
  "Stress around food choices",
  "Holidays/Vacation/Social events",
  "Food cravings",
  "Lack of progress",
  "Healthy food doesn’t taste good",
];

const Barriers = () => {
    
    const navigate = useNavigate();
  const [selectedBarriers, setSelectedBarriers] = useState([]);

  const handleBarrierClick = (barrier) => {
    if (selectedBarriers.includes(barrier)) {
      setSelectedBarriers(selectedBarriers.filter((b) => b !== barrier));
    } else {
      setSelectedBarriers([...selectedBarriers, barrier]);
    }
  };

  const handleNext = () => {
    // console.log('Selected barriers:', selectedBarriers);
    navigate('/activity')
    // Add navigation logic here (e.g., navigate to the next step)
  };

  const handleBack = () => {
    // Add logic for going back
    console.log('Going back');
  };

  return (
    <div className="card">
      <h2 className="title">In the past, what have been your barriers to maintaining weight?</h2>
      <p className="subtitle">Select all that apply.</p>
      <div className="barriers-container">
        {barriersList.map((barrier, index) => (
          <button
            key={index}
            className={`barrier-button ${selectedBarriers.includes(barrier) ? 'selected' : ''}`}
            onClick={() => handleBarrierClick(barrier)}
          >
            {barrier}
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

export default Barriers;
