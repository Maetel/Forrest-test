import React, { useState, useLayoutEffect } from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.css';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import Backdrop from '../shared/Backdrop';

const Navigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  const toggleDrawer = () => {
    let drawer = document.getElementById('navigation-drawer');
    //drawer.classList.add('view');
    drawer.classList.toggle('hidden');
    setDrawerIsOpen(() => !drawerIsOpen);
  };

  const calcDrawerSize = (width) => (width > 700 ? '3x' : '2x');
  const [drawerIconSize, setDrawerIconSize] = useState(
    calcDrawerSize(window.innerWidth)
  );

  //drawer icon size update hook
  useLayoutEffect(() => {
    function updateDrawerIcon() {
      setDrawerIconSize(calcDrawerSize(window.innerWidth));
    }
    window.addEventListener('resize', updateDrawerIcon);
    updateDrawerIcon();
    return () => window.removeEventListener('resize', updateDrawerIcon);
  }, []);

  const logo =
    'https://github.com/MrChoooo/forrest-images/blob/master/logo.png?raw=true';
  const logoUrl =
    'url("https://github.com/MrChoooo/forrest-images/blob/master/logo.png?raw=true")';

  return (
    <React.Fragment>
      {drawerIsOpen && <Backdrop onClick={toggleDrawer} />}

      <header className="navigation-header">
        <div className="navigation" id="navigation">
          <div className="logo-wrapper">
            {/* <NavLink to="/" className="main-logo">
              <h3>FORREST</h3>
            </NavLink> */}
            <NavLink to="/" className="main-logo">
              <img className="logo" src={logo}></img>
            </NavLink>
          </div>

          <button className="navigation-btn" onClick={toggleDrawer}>
            <i class={`fas fa-bars fa-${drawerIconSize}`} id="drawer-icon"></i>
          </button>

          <nav className="navigation-links">
            <NavLinks></NavLinks>
          </nav>
        </div>
        <div
          className="navigation-drawer hidden"
          id="navigation-drawer"
          onClick={toggleDrawer}
        >
          <NavLinks></NavLinks>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Navigation;
