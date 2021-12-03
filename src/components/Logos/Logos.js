import React from 'react';

// for default all icons will be black and the font-size 30px.

// This component will work with https://devicon.dev/ thx to devicon.:)

function Logos({ iconName, fontSizeIcon = '30px', colorIcon = 'black' }) {
  const styles = {
    color: colorIcon,
    fontSize: fontSizeIcon,
  };

  return (
    <div style={styles}>
      <i className={iconName} />
    </div>
  );
}

export default Logos;
