import React from 'react';

import { Link } from 'react-scroll';

import './Navbar.css';

// the first argument is the first position of the array
function Navbar({ navItems }) {
  const [home, about, skills, projects] = navItems;

  return (
    <nav className="nav-container">
      <ul className="nav-list">
        <li className="nav-item">
          <Link
            activeClass="active"
            spy
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
            activeClass="navbar-active"
            spy
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
            activeClass="navbar-active"
            spy
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
            activeClass="navbar-active"
            spy
            smooth="true"
            offset={-70}
            duration={300}
            to={projects}
          >
            {projects}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
