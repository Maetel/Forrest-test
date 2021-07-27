import React, { useEffect } from 'react';

import './AboutPage.css';

const getImageOf = (str) =>
  `https://github.com/Maetel/chtpage-images/blob/master/${str}.jpg?raw=true`;

const AboutPage = (props) => {
  return (
    <div className="about-page" id="about-page">
      {/* ABOUT PAGE */}
      <img src={getImageOf('curri2')} alt="" srcset="" />
    </div>
  );
};

export default AboutPage;
