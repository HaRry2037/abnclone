import React from "react";
import "./mpproperty.css";

import room1 from '../assets/hotelrm1.png';
import room2 from '../assets/hotelrm1.png';
import room3 from '../assets/hotelrm1.png';
import room4 from '../assets/hotelrm1.png';

const properties = [
  {
    id: 1,
    image: room1,
    title: "Groveland, California",
    description: "Private Room & Balcony-Connected...",
    oldPrice: "$289",
    newPrice: "$289",
    rating: "4.91",
  },
  {
    id: 2,
    image: room2,
    title: "Groveland, California",
    description: "Private Room & Balcony-Connected...",
    oldPrice: "$289",
    newPrice: "$289",
    rating: "4.91",
  },
  {
    id: 3,
    image: room3,
    title: "Groveland, California",
    description: "Private Room & Balcony-Connected...",
    oldPrice: "$289",
    newPrice: "$289",
    rating: "4.91",
  },
  {
    id: 4,
    image: room4,
    title: "Groveland, California",
    description: "Private Room & Balcony-Connected...",
    oldPrice: "$289",
    newPrice: "$289",
    rating: "4.91",
  },
];

const PopularProperties = () => {
  return (
        <div className="card-container">
          <div className="header">
          <h2>Most Popular Property</h2>
          <button className="see-all-button">See all →</button>
        </div>
      <div className="popular-properties">
        
        <div className="property-list">
          {properties.map((property) => (
            <div className="property-card" key={property.id}>
              <div className="property-image">
                <img src={property.image} alt={property.title} />
                <span className="tag">Sponsor</span>
                <span className="heart">♡</span>
              </div>
              <div className="property-info">
                <div className="property-title-rating">
                  <h3>{property.title}</h3>
                  <span className="rating">⭐ {property.rating}</span>
                </div>
                <p>{property.description}</p>
                <div className="property-price">
                  <span className="old-price">{property.oldPrice}</span>
                  <span className="new-price">{property.newPrice} night</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularProperties;
