import React from "react";
import "./NavBar.css";
import logo from "../../assets/images/blacklogo.png";


export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo"><img style={{ height: '30px'}} src={logo} />Studio</div>
      <div className="navbar-links">
        <a href="#track-records" className="navbar-link">Track Records</a>
        <a href="#services" className="navbar-link">Services</a>
        <a href="#reviews" className="navbar-link">Reviews</a>
        <a href="#workflow" className="navbar-link">Work Flow</a>
        <a href="#pricing" className="navbar-link">Pricing</a>
        <a href="#about-us" className="navbar-link">About Us</a>  
      </div>
      <a href="#" className="navbar-cta">Contact Us</a>
    </nav>
  );
}