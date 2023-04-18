import React from 'react';
import { Link } from 'react-router-dom';
import './HomeCooked.css';

function HomeCooked() {
  return (
    <div className="homecooked-container">
      <Link to="/" className="homecooked-button">Return</Link>
      <h1>Homecooked Page</h1>
      <p>Some content here...</p>
    </div>
  );
}

export default HomeCooked;
