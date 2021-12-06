import React from 'react';

import './Button.css';

function Button({
  text = 'Empty button',
  url = 'https://github.com/Sitray',
  styles,
}) {
  return (
    <a
      href={url}
      target="_blank"
      className={` ${styles} button`}
      rel="noreferrer"
    >
      {text}
    </a>
  );
}

export default Button;
