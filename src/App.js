import React from 'react';

import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar home="home" about="about" projects="projects" contact="contact" />
    </div>
  );
}

export default App;
