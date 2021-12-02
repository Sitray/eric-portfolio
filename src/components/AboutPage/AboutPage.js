import React from 'react';

import './AboutPage.css';

function AboutPage({ id }) {
  return (
    <div className="ab-section" id={id}>
      <div className="ab-container">
        <div className="ab-title">
          <h1>About me</h1>
        </div>
        <div className="ab-content">
          <img src="eric-foto.jfif" alt="Foto" className="ab-foto" />
          <article className="ab-text-container">
            <h3>Profile</h3>
            <p>
              Soy un entusiasta del desarrollo web y de los diseños
              minimalistas. <br />
              Aamante de las nuevas tecnologías y del cine.
            </p>

            <h3>Experience</h3>
            <p>Pasiona 2016-2018</p>
          </article>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
