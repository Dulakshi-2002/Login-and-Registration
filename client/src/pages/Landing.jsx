import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Landing.css";


const Landing = () => {
  return (
    <div className='landing-main'>
      
      <h1>Welcome to Technova</h1>
      <p>Join us and start your journey today!</p>
      <div className="button-container">
        <Link to="/login" className="landing-login-button">Login</Link>
        <Link to="/register" className="landing-register-button">Register</Link>
      </div>
    </div>
  );
};

export default Landing;