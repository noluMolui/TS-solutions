import React from "react";
import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";
import "./styles.css/Contact.css";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <h2>Contact Us</h2>

      {/* Contact Info */}
      <div className="contact-info">
        <p><FiMapPin /> 15065 Turton St, Daveyton, Benoni, 1520</p>
        <p><FiPhone /> 067 164 0949</p>
        <p><FiMail /> info@tsstylesinnovations.co.za</p>
        <p><FiClock /> Mon - Fri | 10 AM - 5 PM</p>
      </div>

      {/* Contact Form */}
      <form className="contact-form">
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="tel" placeholder="Phone Number" required />
        <input type="text" placeholder="Service Required" required />
        <textarea placeholder="Details / Notes" rows="4" required></textarea>

        <div className="form-buttons">
          <a href="mailto:info@tsstylesinnovations.co.za" className="email-btn">
            Send Via Email
          </a>
          <a href="https://wa.me/27671640949" className="whatsapp-btn">
            Send Via WhatsApp
          </a>
        </div>
      </form>

      {/* Map Button */}
      <a
        href="https://maps.app.goo.gl/kmC7sUZ9u6nGyB6z9"
        target="_blank"
        rel="noopener noreferrer"
        className="map-button"
      >
        <FiMapPin /> Get Directions
      </a>
    </section>
  );
}



