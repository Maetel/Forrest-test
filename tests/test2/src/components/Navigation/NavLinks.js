import React from 'react';

import './NavLinks.css';
import { NavLink } from 'react-router-dom';

const NavLinks = (props) => {
  const showalert = (text = 'hi') => {
    alert(text);
  };
  return (
    <ul className="nav-links">
      <div className="link-container">
        <NavLink to="/about">About</NavLink>
      </div>
      <div className="link-container">
        <NavLink to="/hobby">취미</NavLink>
      </div>
      <div className="link-container">
        <NavLink to="/pro">입시</NavLink>
      </div>
      <div className="link-container">
        <NavLink to="/teachers">강사진</NavLink>
      </div>
      <div className="link-container">
        <NavLink to="/comments">후기</NavLink>
      </div>
      <div className="link-container">
        <NavLink to="/contact">상담</NavLink>
      </div>
    </ul>
  );
};

export default NavLinks;
