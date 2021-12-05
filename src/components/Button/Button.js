import React from 'react';

import './Button.css';

function Button({ text = 'Empty button', url = 'https://github.com/Sitray' }) {
  return (
    <a href={url} target="_blank" className="button" rel="noreferrer">
      {text}
    </a>
  );
}

export default Button;
