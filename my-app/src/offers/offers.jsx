import React from 'react';
import './offers.css'; 
import birthdayImg from '../assets/birdayimag.png'; 

const offerData = [
  {
    image: birthdayImg,
    title: 'Birthday Party',
    description: 'Make their birthday extra special with our exclusive offers!',
  },
  // Add more offers here later if needed
];

const OurOffers = () => {
  return (
    <section className="offers-section">
      <h2 className="offers-title">Our Offers</h2>
      <div className="offer-carousel">
        {offerData.map((offer, index) => (
          <div className="offer-slide" key={index}>
            <img src={offer.image} alt={offer.title} className="offer-image" />
            <div className="offer-overlay">
              <h3 className="offer-heading">{offer.title}</h3>
              <p className="offer-text">{offer.description}</p>
              <button className="offer-button">Book Now</button>
            </div>
          </div>
        ))}
        <button className="arrow left" aria-label="Previous offer">❮</button>
        <button className="arrow right" aria-label="Next offer">❯</button>
      </div>
    </section>
  );
};

export default OurOffers;
