import React from 'react';

function Header() {
  const headerStyle = {
    backgroundColor: '#2c3e50',
    padding: '1.5em',
    color: 'white',
    textAlign: 'center',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
  };

  const titleStyle = {
    fontSize: '2.5em',
    marginBottom: '0.5em'
  };

  const subTitleStyle = {
    fontSize: '1.1em',
    color: '#ecf0f1'
  };

  return (
    <header style={headerStyle}>
      <h1 style={titleStyle}>Swati Medical Store</h1>
      <p style={subTitleStyle}>Find your medicines here</p>
    </header>
  );
}

export default Header;
