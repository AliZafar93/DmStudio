import React from "react";
import "./NavBar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Dm Studio</div>
      <div className="navbar-links">
        <a href="#" className="navbar-link">Track Records</a>
        <a href="#" className="navbar-link">Services</a>
        <a href="#" className="navbar-link">Reviews</a>
        <a href="#" className="navbar-link">Pricing</a>
        <a href="#" className="navbar-link">About Us</a>
      </div>
      <a href="#" className="navbar-cta">Get Started</a>
    </nav>
  );
}