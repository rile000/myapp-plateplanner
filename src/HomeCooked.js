import React from 'react';
import { Link } from 'react-router-dom';
import './HomeCooked.css';

function HomeCooked() {
  return (
    <div className="homecooked-container">
      <Link to="/" className="homecooked-button">Back to App</Link>
      <h1 className="homecooked-title">Home Cooked</h1>
      <p className="homecooked-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  );
}

export default HomeCooked;
