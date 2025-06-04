import React from "react";
import "./travs.css";

// Import your destination images
import redFort from "../assets/redfort1.png";
import mcleodganj from "../assets/mcleodganj1.png";
import majuli from "../assets/majuli1.png";
import bodhGaya from "../assets/bodhgaya1.png";
import ziro from "../assets/ziro1.png";
import alleppey from "../assets/alleooey.png";
import dantewada from "../assets/dantewada1.png";
import bihar from "../assets/bihar1.png";
import damdama from "../assets/damdama1.png";
import lehLadakh from "../assets/lehladakh1.png";
import hampi from "../assets/hampi1.png";
import jaisalmer from "../assets/jaisalmar1.png";
import sunTemple from "../assets/suntemple1.png";
import goldenTemple from "../assets/goldentemple1.jpg";
import redFort2 from "../assets/redfort2.png";
import redFort3 from "../assets/redfort1.png";

const destinations = [
  { id: 1, name: "Red Fort", location: "New Delhi", image: redFort },
  { id: 2, name: "Mcleodganj", location: "Himachal Pradesh", image: mcleodganj },
  { id: 3, name: "Majuli", location: "Assam", image: majuli },
  { id: 4, name: "Bodh Gaya", location: "Bihar", image: bodhGaya },
  { id: 5, name: "Ziro", location: "Arunachal", image: ziro },
  { id: 6, name: "Alleppey", location: "Kerala", image: alleppey },
  { id: 7, name: "Dantewada", location: "Chhattisgarh", image: dantewada },
  { id: 8, name: "Bihar", location: "Gujarat", image: bihar },
  { id: 9, name: "Damdama Lake", location: "Gurgaon", image: damdama },
  { id: 10, name: "Leh Ladakh", location: "Jammu & Kashmir", image: lehLadakh },
  { id: 11, name: "Hampi", location: "Karnataka", image: hampi },
  { id: 12, name: "Jaisalmer", location: "Rajasthan", image: jaisalmer },
  { id: 13, name: "Sun temple", location: "Odisha", image: sunTemple },
  { id: 14, name: "Golden Temple", location: "Amritsar", image: goldenTemple },
  { id: 15, name: "Red Fort", location: "New Delhi", image: redFort2 },
  { id: 16, name: "Red Fort", location: "New Delhi", image: redFort3 },
];

const DestinationsGrid = () => {
  return (
    <div className="destination-wrapper">
      <h2 className="section-title">Explore where travellers are visiting</h2>
      <div className="grid-container">
        {destinations.map((dest) => (
          <div key={dest.id} className="destination-card">
            <img src={dest.image} alt={dest.name} />
            <div className="destination-info">
              <h3>{dest.name}</h3>
              <p>{dest.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestinationsGrid;
