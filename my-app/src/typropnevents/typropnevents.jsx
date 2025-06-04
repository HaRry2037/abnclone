import React from "react";
import "./typropnevents.css";

// Import images from assets
import houseImg from "../assets/house1.png";
import hotelImg from "../assets/hotel1.png";
import cottageImg from "../assets/cottage1.png";
import condoImg from "../assets/condo1.png";

import uniqueImg from "../assets/unique1.png";
import farm1Img from "../assets/farm1.png";
import farm2Img from "../assets/farm2.png";

const typesOfProperty = [
  { id: 1, name: "House", image: houseImg },
  { id: 2, name: "Hotel", image: hotelImg },
  { id: 3, name: "Cottage", image: cottageImg },
  { id: 4, name: "Condo", image: condoImg },
];

const typesOfStays = [
  {
    id: 1,
    name: "Unique Stay",
    tag: "New Offers",
    desc: "Lorem ipsum dolor sit amet.",
    image: uniqueImg,
  },
  {
    id: 2,
    name: "Farm Stay",
    tag: "50% off",
    desc: "Dolor sit amet consectetur.",
    image: farm1Img,
  },
  {
    id: 3,
    name: "Farm Stay",
    tag: "50% off",
    desc: "Dolor sit amet consectetur.",
    image: farm2Img,
  },
];

const PropertyAndStays = () => {
  return (
    <div className="section-container">
      {/* Types of Property */}
      <div className="section">
        <div className="section-header">
          <h2>Types of Property</h2>
        </div>
        <div className="card-container">
          {typesOfProperty.map((item) => (
            <div className="card" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="card-title">{item.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Types of Stays */}
      <div className="section">
        <div className="section-header">
          <h2>Types of Stays</h2>
          <button className="see-all-button">See all →</button>
        </div>
        <div className="stay-card-row">
          {typesOfStays.map((item) => (
            <div className="stay-card" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="overlay">
                <span className="tag">{item.tag}</span>
                <div className="stay-content">
                  <h3>{item.name}</h3> 
                  <hr/>
                  <p>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyAndStays;