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
        <div className="button-container">
          <button className="button"><Link to="/takeaways">Takeaways</Link></button>
          <button className="button" onClick={() => {window.location.href='/homecooked'}}>Home Cooked</button>
        </div>
      </div>
      <Routes>
        <Route path="/homecooked" element={<HomeCooked />} />
        <Route path="/takeaways" element={<Takeaway />} />
      </Routes>
    </Router>
  );
}

export default App;
