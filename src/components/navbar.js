import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>
          <Link to="/near-hospitals">Check Near Hospitals</Link>
        </li>
        <li>
          <Link to="/guidance">Guidance</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
