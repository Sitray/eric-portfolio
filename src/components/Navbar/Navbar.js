import React from 'react';

import { Link } from 'react-scroll';

import './Navbar.css';

function Navbar({ home, about, projects, skills }) {
  return (
    <nav className="nav-container">
      <ul className="nav-list">
        <li className="nav-item">
          <Link
            activeClass="active"
            spy="true"
            smooth="true"
            offset={-70}
            duration={300}
            to={home}
          >
            {home}
          </Link>
        </li>
        <li className="nav-item">
          <Link
            activeClass="active"
            spy="true"
            smooth="true"
            offset={-70}
            duration={300}
            to={about}
          >
            {about}
          </Link>
        </li>
        <li className="nav-item">
          <Link
            activeClass="active"
            spy="true"
            smooth="true"
            offset={-70}
            duration={300}
            to={skills}
          >
            {skills}
          </Link>
        </li>
        <li className="nav-item">
          <Link
            activeClass="active"
            spy="true"
            smooth="true"
            offset={-70}
            duration={300}
            to={projects}
            className="projects"
          >
            {projects}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
