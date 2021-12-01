import React from 'react';

import './AboutPage.css';

function AboutPage({ id }) {
  return (
    <div className="ab-container" id={id}>
      <div className="ab-title">
        <h1>About me page!!!!!!!!!</h1>
      </div>
      <div className="ab-content">
        <img src="eric-foto.jfif" alt="Foto" className="lp-foto" />
        <p className="ab-text">
          kasjhdljasdlkjadflkjsalfkjslkfdjlskdjflksdfjlksdjfdlksadjflksdjflksajf
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
