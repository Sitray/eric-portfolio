import React from 'react';

import { GoMarkGithub } from 'react-icons/go';

import './LandingPage.css';

function LandingPage() {
  return (
    <div className="lp-container">
      <div className="lp-text">
        <img src="test.svg" alt="logo" className="lp-logo" />
        <h1>Eric Marès Aguilera</h1>
        <span>Front-end Developer</span>
      </div>
      <div className="lp-icons">
        <a href="https://github.com/Sitray" target="_blank" rel="noreferrer">
          <GoMarkGithub color="black" />
        </a>
      </div>
    </div>
  );
}

export default LandingPage;
