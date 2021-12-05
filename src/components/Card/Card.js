import React from 'react';

import './Card.css';

function Card() {
  return (
    <div className="card-container">
      <div className="card-image">
        <img
          alt="iamge"
          src="https://picsum.photos/300/354"
          className="card-image"
        />
      </div>
      <div className="card-text-container">
        <h1 className="card-title"> Project 1 </h1>
        <p className="card-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          dignissim eleifend leo. Donec efficitur et quam ac varius. Quisque
          venenatis pellentesque augue ut pretium. Morbi sit amet pharetra
          nulla.
        </p>
        <div className="card-button">
          <button type="button">Source Code</button>
          <button type="button">View Project</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
