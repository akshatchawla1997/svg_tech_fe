"use client"
import React from "react";
import "../Header/Header.css";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <img src="/logo.png" alt="SV Tech Soft"  />
      </div>
      <nav className="navbar-links">
        <ul>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/about-us'>About Us</NavLink>
          <NavLink to=''>
            Online Training <span>&#x25BC;</span>
          </NavLink>
          <NavLink to='/recorded-videos'>Recorded Videos</NavLink>
          <NavLink to='/job-support'>Job Support</NavLink>
          <NavLink to='/blogs'>Blog</NavLink>
          <NavLink to='/work-with-us'>Work with Us</NavLink>
          <NavLink to='/contact-us'>Contact Us</NavLink>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
