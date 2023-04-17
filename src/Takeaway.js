import React from 'react';
import './Takeaway.css';
import { Link } from 'react-router-dom';

function Takeaway() {
  return (
    <div className="takeaway-container">
      <Link to="/" className="return-button">&lt; Back to App</Link>
      <h1>Takeaway Page</h1>
      <p>Some content here...</p>
    </div>
  );
}

export default Takeaway;
