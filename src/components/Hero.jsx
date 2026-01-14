import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./styles.css/Hero.css";
import heroImage from "../assets/service image1.jpg";

export default function Hero() {
  return (
    <header className="hero-section" id="home">
      <div className="hero-content">
        <div className="hero-text">
          <h1>T S Styles Innovations (Pty) Ltd</h1>
          <h2>Innovative Solutions for Your Laptops & Tech Needs</h2>
        </div>

        <div className="hero-image-container">
          <img
            src={heroImage}
            alt="Laptop repair"
            className="hero-image"
          />

          <a
            href="https://maps.app.goo.gl/kmC7sUZ9u6nGyB6z9"
            target="_blank"
            rel="noopener noreferrer"
            className="location-button"
          >
            <FaMapMarkerAlt /> Find Us Here
          </a>
        </div>
      </div>
    </header>
  );
}


