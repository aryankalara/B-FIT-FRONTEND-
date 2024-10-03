import React, { useState } from 'react';
import './CalorieForm.css'; // Optional: CSS for styling
import { useNavigate } from 'react-router-dom';

const CalorieForm = () => {
  const navigate = useNavigate();
  const [sex, setSex] = useState('');
  const [dob, setDob] = useState('');
  const [country, setCountry] = useState('India');

  const handleNext = () => {
    navigate("/credentialsform")
    
    // You can add navigation logic here, for example using useNavigate
  };

  const handleSexChange = (event) => {
    setSex(event.target.value);
  };

  const handleDobChange = (event) => {
    setDob(event.target.value);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    <div className="calorie-form-container">
      <h2>Please select which sex we should use to calculate your calorie needs.</h2>

      <div className="sex-selection">
        <label>
          <input 
            type="radio" 
            value="Male" 
            checked={sex === 'Male'} 
            onChange={handleSexChange} 
          /> 
          Male
        </label>
        <label>
          <input 
            type="radio" 
            value="Female" 
            checked={sex === 'Female'} 
            onChange={handleSexChange} 
          /> 
          Female
        </label>
      </div>

      <a href="#help" className="help-link">Which one should I choose?</a>

      <div className="dob-section">
        <label>When were you born?</label>
        <input 
          type="date" 
          value={dob} 
          onChange={handleDobChange} 
          placeholder="mm/dd/yyyy"
        />
      </div>

      <div className="country-section">
        <label>Where do you live?</label>
        <select value={country} onChange={handleCountryChange}>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="Canada">Canada</option>
          <option value="Australia">Australia</option>
          {/* Add more countries as needed */}
        </select>
      </div>

      <p className="info-text">
        We use this information to calculate an accurate calorie goal for you.
      </p>

      <div className="navigation-buttons">
        <button className="back-button">BACK</button>
        <button className="next-button" disabled={!sex || !dob || !country}  onClick={handleNext}>NEXT</button>
      </div>
    </div>
  );
};

export default CalorieForm;
