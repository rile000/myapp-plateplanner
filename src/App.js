import React from 'react';
import logo from './img/logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="banner">
        <img src={logo} alt="Logo" />
      </div>
      <div className="button-container">
        <button className="button">Takeaways</button>
        <button className="button">Home Cooked</button>
      </div>
    </div>
  );
}

export default App;
