import React from 'react';

const NavButton = (props) => {
  return (
    <button
      className={`nav-button ${props.className || ''}`}
      type="button"
      name={props.name || ''}
      onClick={props.onClick}
      value={props.value || ''}
    >
      {props.children}
    </button>
  );
};

export default NavButton;
