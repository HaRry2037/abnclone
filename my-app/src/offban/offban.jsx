import React from "react";
import "./offban.css";

// Import your icon
import offerIcon from "../assets/offerico.png"; // Replace with actual path

const OfferBanner = () => {
  return (
    <div className="offer-banner">
      <div className="offer-content">
        <img src={offerIcon} alt="Offer Icon" className="offer-icon" />
        <div className="offer-text">
          <h3>Exclusive Offers</h3>
          <p>Pisus non egestas vulputate, arcu purus viverra ante, eget egestas.</p>
        </div>
      </div>
      <button className="subscribe-button">Subscribe</button>
    </div>
  );
};

export default OfferBanner;
