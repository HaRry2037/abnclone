import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h2>AirStay</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          efficitur, risus non egestas vulputate, arcu purus viverra ante,
          eget egestas.
        </p>
        <p className="footer-copy">Airstay@2024</p>
      </div>
      <div className="footer-right">
        <h4>Support</h4>
        <ul>
          <li>Assistance</li>
          <li>Assistance</li>
          <li>Get in Touch</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
