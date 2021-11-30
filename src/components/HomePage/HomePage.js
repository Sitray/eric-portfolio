import React from 'react';

import { GoMarkGithub, GoChevronDown } from 'react-icons/go';
import { ImLinkedin } from 'react-icons/im';

import { Link } from 'react-scroll';

import './HomePage.css';

function HomePage() {
  return (
    <div className="lp-container">
      <div className="lp-text">
        <img src="test.svg" alt="logo" className="lp-logo" />
        <h1>Eric Marès Aguilera</h1>
        <span>Front-end Developer</span>
      </div>
      <div className="lp-icons">
        <a href="https://github.com/Sitray" target="_blank" rel="noreferrer">
          <GoMarkGithub color="black" size="25px" />
        </a>
        <a
          href="https://www.linkedin.com/in/eric-mares-aguilera/"
          target="_blank"
          rel="noreferrer"
        >
          <ImLinkedin color="black" size="25px" />
        </a>
      </div>
      <div className="lp-arrow-icon">
        <Link to="about">
          <GoChevronDown color="black" size="20px" />
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
