import React from "react";
import "./event.css";

// Import images from assets
import uniqueImg from "../assets/unique1.png";
import farm1Img from "../assets/farm1.png";
import farm2Img from "../assets/farm2.png";

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

const Event = () => {
  return (
    <div className="stays-section">
      <div className="section-header">
        <h2>Events</h2>
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
                <hr />
                <p>{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Event;
