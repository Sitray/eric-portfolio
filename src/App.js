import React from 'react';

import './App.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="web-container">
      <Navbar home="home" about="about" projects="projects" contact="contact" />
    </div>
  );
}

export default App;
