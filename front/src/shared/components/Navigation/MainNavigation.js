import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import Backdrop from '../UIElements/Backdrop';
import './MainNavigation.css';

const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };
  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return (
    <React.Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>
      <MainHeader>
        <button
          className="main-navigation__menu-btn"
          onClick={openDrawerHandler}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="main-navigation__title-container">
          {/* <div className="main-navigation__title-icon">
            <img src="https://picsum.photos/400/300" alt="title icon" />
          </div> */}
          <h1 className="main-navigation__title">
            <Link to="/">FORREST</Link>
          </h1>
          <div className="main-navigation__subtitle">
            <Link to="/">Where your soul relaxes</Link>
          </div>
        </div>

        <nav className="main-navigation__header-nav">
          <NavLinks></NavLinks>
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
