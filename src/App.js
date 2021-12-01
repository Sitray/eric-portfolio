import React from 'react';

import './App.css';

import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';
import AboutPage from './components/AboutPage/AboutPage';
import SkillPage from './components/SkillsPage/SkillPage';
import ProjectPage from './components/ProjectPage/ProjectPage';

function App() {
  return (
    <div className="web-container">
      <Navbar home="home" about="about" projects="projects" skills="skills" />
      <HomePage id="home" />
      <AboutPage id="about" />
      <SkillPage id="skills" />
      <ProjectPage id="projects" />
    </div>
  );
}

export default App;
