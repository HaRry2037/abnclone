import React from 'react';
import './PopularProperty.css';

const propertyData = [
  {
    id: 1,
    location: 'Groveland, California',
    title: 'Private Room & Balcony-Connected...',
    rating: 4.91,
    price: 289,
    originalPrice: 289,
    image: '/src/assets/property1.jpg',
    sponsor: true
  },
  {
    id: 2,
    location: 'Groveland, California',
    title: 'Private Room & Balcony-Connected...',
    rating: 4.91,
    price: 289,
    originalPrice: 289,
    image: '/src/assets/property1.jpg',
    sponsor: true
  },
  {
    id: 3,
    location: 'Groveland, California',
    title: 'Private Room & Balcony-Connected...',
    rating: 4.91,
    price: 289,
    originalPrice: 289,
    image: '/src/assets/property1.jpg',
    sponsor: true
  },
  {
    id: 4,
    location: 'Groveland, California',
    title: 'Private Room & Balcony-Connected...',
    rating: 4.91,
    price: 289,
    originalPrice: 289,
    image: '/src/assets/property1.jpg',
    sponsor: true
  }
];

const PopularProperty = () => {
  return (
    <section className="popular-property">
      <div className="property-header">
        <h2>Most Popular Property</h2>
        <a href="#" className="see-all">See all <span>→</span></a>
      </div>

      <div className="property-grid">
        {propertyData.map((property) => (
          <div key={property.id} className="property-card">
            <div className="image-container">
              <img src={property.image} alt={property.title} />
              <button className="favorite-btn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </button>
              {property.sponsor && <span className="sponsor-tag">Sponsor</span>}
              <div className="image-dots">
                <span className="dot active"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
            </div>
            <div className="property-info">
              <div className="location-rating">
                <h3>{property.location}</h3>
                <div className="rating">
                  <span className="star">★</span>
                  {property.rating}
                </div>
              </div>
              <p className="title">{property.title}</p>
              <div className="price">
                <span className="current-price">${property.price}</span>
                {property.originalPrice > property.price && (
                  <span className="original-price">${property.originalPrice}</span>
                )}
                <span className="per-night">night</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularProperty; 