import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import TextBlock from './Text';
import Stext from './Stext';
import './App.css';
import { BrowserRouter, useNavigate, Route, Routes } from 'react-router-dom';
import UserName from './user/UserName';
import UserGoals from './user/UserGoals';
import UserOptions from './user/UserOptions';
import UserActivity from './user/UserActivity';
import CalorieForm from './user/CalorieForm';
import WeightForm from './user/WeightForm';
import CredentialsForm from './user/CredentialsForm';
import UserLogin from './user/UserLogin';

function App() {
  const navigate = useNavigate(); // Hook for navigation

  const change = () => {
    navigate('/username'); // Navigate to the UserName component
  };

  return (
    <div className="App">
      <Parallax pages={2} style={{ top: '0', left: '0' }} className="animation">
        <ParallaxLayer offset={0} speed={0.25}>
          <div className="animation_layer parallax" id="artback"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div className="animation_layer parallax" id="mountain"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.1}>
          <div className="animation_layer parallax" id="logoland"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div className="animation_layer parallax" id="jungle1"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}>
          <div className="animation_layer parallax" id="jungle2"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.5}>
          <div className="animation_layer parallax" id="jungle3"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.45}>
          <div className="animation_layer parallax" id="jungle4"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.40}>
          <div className="animation_layer parallax" id="manonmountain"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}>
          <div className="animation_layer parallax" id="jungle5"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0.9} speed={0.25}>
          <TextBlock />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.25}>
          <Stext />
        </ParallaxLayer>
        <ParallaxLayer offset={1.6} speed={0.25}>
          <div id="button-container">
            <button id="start-button" onClick={change}>Start Today</button>
            <div id="login-container">
              <button id="login-button" onClick={() => navigate('/userlogin')}>Login</button>
              
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

function MainApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/username" element={<UserName />} />
        <Route path="/goals" element={<UserGoals />} />
        <Route path="/options" element={<UserOptions />} />
        <Route path="/activity" element={<UserActivity />} />
        <Route path="/calorie" element={<CalorieForm />} />
        <Route path="/weightform" element={<WeightForm />} />
        <Route path="/credentialsform" element={<CredentialsForm />} />
        <Route path="/userlogin" element={<UserLogin />} /> {/* Ensure you have a Login component */}
      </Routes>
    </BrowserRouter>
  );
}

export default MainApp;
