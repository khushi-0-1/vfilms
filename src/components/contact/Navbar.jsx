import React from 'react';
import './Navbar.css'; // We will create this file

// Import your logo from the correct path
import logo from '../../assets/contact/vfilms-logo.svg'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="VFilms Logo" className="logo" />
      <div>
        {/* Add nav links here if you want */}
      </div>
    </nav>
  );
};

export default Navbar;