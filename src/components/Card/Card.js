import React from 'react';
import Button from '../Button/Button';

import './Card.css';

function Card({ title = 'test title' }) {
  return (
    <div className="card-container">
      <figure className="card-image">
        <img
          alt="iamge"
          src="https://picsum.photos/300/354"
          className="card-image"
        />
      </figure>
      <div className="card-text-container">
        <h1 className="card-title"> {title} </h1>
        <p className="card-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          dignissim eleifend leo. Donec efficitur et quam ac varius. Quisque
          venenatis pellentesque augue ut pretium. Morbi sit amet pharetra
          nulla.
        </p>
        <div className="card-button">
          <Button text="Source Code" styles="btn" />
          <Button text="Live Demo" />
        </div>
      </div>
    </div>
  );
}

export default Card;
