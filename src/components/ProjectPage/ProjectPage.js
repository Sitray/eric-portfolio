import React from 'react';

import Card from '../Card/Card';

import './ProjectPage.css';

function ProjectPage({ id }) {
  return (
    <div className="pr-container" id={id}>
      <h1>Project page</h1>
      <div>
        <Card />
      </div>
    </div>
  );
}

export default ProjectPage;
