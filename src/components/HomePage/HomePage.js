import React from 'react';

import { FaArrowDown } from 'react-icons/fa';
import { Link } from 'react-scroll';

import Logos from '../Logos/Logos';

import './HomePage.css';

function HomePage({ id }) {
  return (
    <div className="lp-container" id={id}>
      <div className="lp-text">
        <img src="test.svg" alt="logo" className="lp-logo" />
        <h1>Eric Marès Aguilera</h1>
        <span>Front-end Developer</span>
      </div>
      <div className="lp-icons">
        <a href="https://github.com/Sitray" target="_blank" rel="noreferrer">
          <Logos
            iconName="devicon-github-original colored"
            fontSizeIcon="30px"
            colorIcon="black"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/eric-mares-aguilera/"
          target="_blank"
          rel="noreferrer"
        >
          <Logos
            iconName="devicon-linkedin-plain"
            fontSizeIcon="30px"
            colorIcon="black"
          />
        </a>
      </div>
      <div className="lp-arrow-icon bounce">
        <Link
          to="about"
          smooth="true"
          duration={400}
          activeClass="navbar-active"
        >
          <FaArrowDown color="black" />
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
