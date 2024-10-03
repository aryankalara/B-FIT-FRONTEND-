import React, { useState } from 'react';
import './AccountForm.css'; // Optional: CSS for styling
import { useNavigate } from 'react-router-dom';

const AccountForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const  navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handle = () => {
    navigate('../userlogin')
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleTermsChange = (event) => {
    setAgreeToTerms(event.target.checked);
  };

  return (
    <div className="account-form-container">
      <h2>Almost there! Create your account.</h2>

      <div className="input-section">
        <label>Email address</label>
        <input 
          type="email" 
          value={email} 
          onChange={handleEmailChange} 
          placeholder="Email address" 
          required
          className="email-input"
        />
      </div>

      <div className="input-section password-section">
        <label>Create a password</label>
        <div className="password-wrapper">
          <input 
            type={showPassword ? 'text' : 'password'} 
            value={password} 
            onChange={handlePasswordChange} 
            placeholder="Create a password"
            required
            className="password-input"
          />
          <button 
            type="button" 
            onClick={toggleShowPassword} 
            className="show-password-toggle"
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
        <p className="password-instruction">Must be at least 10 characters, no spaces.</p>
      </div>

      <p className="privacy-notice">
        This site is protected by reCAPTCHA and the Google 
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer"> Privacy Policy</a> 
        and 
        <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer"> Terms</a> apply.
      </p>

      <div className="terms-section">
  <label className="terms-label">
    <input 
      type="checkbox" 
      checked={agreeToTerms} 
      onChange={handleTermsChange} 
      required
    />
    I agree to B-FIT's 
    <a href="#terms"> Terms & Conditions</a> and 
    <a href="#privacy"> Privacy Policy</a>.
  </label>
</div>


      <div className="submit-section">
        <button 
          className="continue-button" 
          disabled={!email || password.length < 10 || !agreeToTerms}
          onClick={handle}

        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AccountForm;
