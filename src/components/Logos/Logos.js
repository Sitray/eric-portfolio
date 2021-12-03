import React from 'react';

// for default all icons will be black and 30px

function Logos({ iconName, fontSizeIcon = '30px', colorIcon = 'black' }) {
  const styles = {
    color: colorIcon,
    fontSize: fontSizeIcon,
  };

  return (
    <div style={styles}>
      <i className={`${iconName}`} />
    </div>
  );
}

export default Logos;
