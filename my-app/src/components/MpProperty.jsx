import React from 'react';
import './MpProperty.css';

const propertyData = [
  {
    id: 1,
    location: 'Groveland, California',
    title: 'Private Room & Balcony-Connected...',
    rating: 4.91,
    price: 289,
    image: '/src/assets/room1.jpg',
  },
  {
    id: 2,
    location: 'Groveland, California',
    title: 'Private Room & Balcony-Connected...',
    rating: 4.91,
    price: 289,
    image: '/src/assets/room1.jpg',
  },
  {
    id: 3,
    location: 'Groveland, California',
    title: 'Private Room & Balcony-Connected...',
    rating: 4.91,
    price: 289,
    image: '/src/assets/room1.jpg',
  },
  {
    id: 4,
    location: 'Groveland, California',
    title: 'Private Room & Balcony-Connected...',
    rating: 4.91,
    price: 289,
    image: '/src/assets/room1.jpg',
  }
];

const MpProperty = () => {
  return (
    <section className="mp-property">
      <div className="mp-header">
        <h2>Most Popular Property</h2>
        <a href="#" className="see-all">
          See all <span className="arrow">→</span>
        </a>
      </div>

      <div className="property-container">
        {propertyData.map((property) => (
          <div key={property.id} className="property-card">
            <div className="image-wrapper">
              <span className="sponsor-badge">Sponsor</span>
              <button className="like-button">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </button>
              <img src={property.image} alt={property.title} />
              <div className="image-dots">
                <span className="dot active"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
            </div>
            <div className="property-details">
              <div className="location-row">
                <h3>{property.location}</h3>
                <div className="rating">
                  <span className="star">★</span>
                  <span>{property.rating}</span>
                </div>
              </div>
              <p className="property-title">{property.title}</p>
              <p className="price">
                <span className="amount">${property.price}</span>
                <span className="duration">night</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MpProperty; 