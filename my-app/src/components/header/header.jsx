import React from 'react';
import './header.css';
import airbico from '../../assets/Airbnb.png'

const Header = () => {
  return (
    <div className="container">
    <header className="header">
      <div className="header-left">
        <img src={airbico} alt="Airbnb Logo" className="logo-img" />
      </div>

      <nav className="header-center">
        <a href="#">Stay</a>
        <a href="#">Adventures</a>
        <a href="#">Accommodation</a>
      </nav>

      <div className="header-right">
        <button className="partner-btn">🤝 Partner with Us</button>
        <button className="login-btn">Login</button>
      </div>
    </header>
    </div>
  );
};

export default Header;
