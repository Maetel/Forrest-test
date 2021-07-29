import React from 'react';

import './CommentsPage.css';
import FetchImage from '../../scripts/FetchImage';

const logo =
  'https://github.com/MrChoooo/forrest-images/blob/master/logo.png?raw=true';

const logoUrl =
  'url("https://github.com/MrChoooo/forrest-images/blob/master/logo.png?raw=true")';

const Logo = (props) => {
  // return <img src={logo} alt="" srcset="" />;

  return (
    <div
      className="logo"
      style={{ backgroundImage: logoUrl, width: '400px', height: '100px' }}
    ></div>
  );
};

const CommentsPage = (props) => {
  return (
    <div className="comments-page">
      Comments PAGE
      <Logo />
    </div>
  );
};

export default CommentsPage;
