import React from 'react';

const Header = ({ text, bgColor, textColor }) => {
  const HeaderStyles = { backgroundColor: bgColor, color: textColor };

  return (
    <header style={HeaderStyles}>
      <div>
        <h2>{text}</h2>
      </div>
    </header>
  );
};

export default Header;
