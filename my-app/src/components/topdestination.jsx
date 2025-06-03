import React from 'react';
import './topdestination.css';

import delhi from '../assets/delhi1.png';
import chennai from '../assets/chennai1.png';
import lucknow from '../assets/lucknow1.png';
import bangalore from '../assets/banglore1.png';

const destinations = [
  { name: 'New Delhi', image: delhi },
  { name: 'Chennai', image: chennai },
  { name: 'Lucknow', image: lucknow },
  { name: 'Bangalore', image: bangalore },
];

const TopDestinations = () => {
  return (
    <div className="section-container">
    <section className="top-destinations">
      <div className="top-header">
        <h2>Top Destinations</h2>
        <a href="#" className="see-all">See all →</a>
      </div>

      <div className="destinations-grid">
        {destinations.map((dest, index) => (
          <div className="destination-card" key={index}>
            <img src={dest.image} alt={dest.name} />
            <div className="label">{dest.name}</div>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default TopDestinations;
