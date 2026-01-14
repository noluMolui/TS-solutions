import React, { useState } from "react";
import "./styles.css/Navbar.css";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <nav>
      <a href="#home" className="logo-link">
        <img src={logo} alt="TS Logo" className="logo" />
      </a>

      <div className={`nav-links ${open ? "open" : ""}`}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
         <li>
  <a href="#contact" className="book-now">Book Now</a>
</li>

        </ul>
      </div>

      <button className="menu-icon" onClick={toggleMenu}>
        ☰
      </button>
    </nav>
  );
}


