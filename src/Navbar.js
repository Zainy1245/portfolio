import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
<header>
        <div className="logo">Zain-ul-Abdeen
        </div>
        <nav clasName="navbar">
            <ul className="navbar-nav" id="navbar-nav">
                <li><a href="index.html">Home</a></li>
                <li><a href="Examples.html">Projets</a></li>
                <li><a href="tour.html">Contact</a></li>
                
                <li><a href="help.html">Help</a></li>
                <button className="download-btn-nav">Download CV</button>
            </ul>
            <div className="menu-icon" onclick="toggleMenu()">&#9776;</div>
        </nav>
        
    </header>
);
};

export default Navbar;