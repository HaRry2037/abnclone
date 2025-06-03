import React from 'react';
import './bedbanner.css'; 
import backgroundImage from '../../assets/bedbanner2.png'; // adjust the path as needed

const HeroSection = () => {
  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="quote-box">
        “Stay somewhere as unique as you are”
      </div>
    </section>
  );
};

export default HeroSection;
