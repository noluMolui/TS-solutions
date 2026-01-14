import React from "react";
import { FaUserTie, FaBolt, FaMoneyBillWave, FaCogs, FaSmile } from "react-icons/fa";
import "./styles.css/WhyChooseUs.css"; // <- import the CSS here

export default function WhyChooseUs() {
  return (
    <section className="why-choose-us">
      <h2>Why Choose Us?</h2>
      <div className="why-cards">
        <div className="why-card">
          <FaUserTie />
          <h3>Experienced Technicians</h3>
          <p>Our team has years of experience fixing laptops, ensuring reliable and precise repairs.</p>
        </div>

        <div className="why-card">
          <FaBolt />
          <h3>Fast & Reliable Service</h3>
          <p>We value your time. Quick diagnostics and repairs without compromising quality.</p>
        </div>

        <div className="why-card">
          <FaMoneyBillWave />
          <h3>Affordable Pricing</h3>
          <p>Competitive pricing with no hidden fees. Quality service without breaking your budget.</p>
        </div>

        <div className="why-card">
          <FaCogs />
          <h3>Quality Parts & Repairs</h3>
          <p>We use only premium components and tested methods for long-lasting results.</p>
        </div>

        <div className="why-card">
          <FaSmile />
          <h3>Customer Satisfaction Guaranteed</h3>
          <p>Your happiness is our priority. We ensure every repair leaves you satisfied and confident.</p>
        </div>
      </div>
    </section>
  );
}

