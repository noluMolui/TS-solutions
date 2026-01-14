import React from "react";
import { FaLaptop, FaEnvelopeOpenText, FaHeadphones, FaVideo, FaRecycle } from "react-icons/fa";
import "./styles.css/Services.css";

export default function Services() {
  return (
    <section className="services-section" id="services">
      <h2>Our Services</h2>
      <div className="services-cards">
        <div className="service-card">
          <FaLaptop />
          <h3>Laptop Repairs & Accessories</h3>
          <p>Hardware and software solutions to keep your devices running smoothly.</p>
        </div>
        <div className="service-card">
          <FaEnvelopeOpenText />
          <h3>Digital Invitations</h3>
          <p>Create stylish digital invitations for events and special occasions.</p>
        </div>
        <div className="service-card">
          <FaHeadphones />
          <h3>Sound Hire & DJ Services</h3>
          <p>Professional sound systems and DJ services for events and parties.</p>
        </div>
        <div className="service-card">
          <FaVideo />
          <h3>Live Streaming & Videography</h3>
          <p>High-quality live streaming and video recording for events and presentations.</p>
        </div>
        <div className="service-card">
          <FaRecycle />
          <h3>Refurbished Laptops</h3>
          <p>Top-quality refurbished laptops tested and optimized for performance.</p>
        </div>
      </div>
    </section>
  );
}

