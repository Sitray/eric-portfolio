import React from 'react';

import { FaGithubSquare, FaArrowDown, FaLinkedin } from 'react-icons/fa';

import { Link } from 'react-scroll';

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
          <FaGithubSquare color="black" size="30px" />
        </a>
        <a
          href="https://www.linkedin.com/in/eric-mares-aguilera/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin color="black" size="30px" />
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
