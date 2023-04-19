import React from 'react';
import logo from './img/logo.png';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomeCooked from './HomeCooked';
import Takeaway from './Takeaway';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="banner">
          <img src={logo} alt="Logo" />
        </div>
        <Routes>
          <Route path="/" element={
            <div className="button-container">
              <button className="button" onClick={() => {window.location.href='/takeaways'}}>Takeaways</button>
              <button className="button" onClick={() => {window.location.href='/homecooked'}}>Home Cooked</button>
            </div>
          } />
          <Route path="/homecooked" element={<HomeCooked />} />
          <Route path="/takeaways" element={<Takeaway />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
