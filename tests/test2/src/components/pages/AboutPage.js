import React, { useEffect } from 'react';

import './AboutPage.css';
import FetchImage from '../../scripts/FetchImage';

const AboutPage = (props) => {
  return (
    <div className="about-page" id="about-page">
      {/* ABOUT PAGE */}
      <img src={FetchImage('about1')} alt="" srcset="" />
    </div>
  );
};

export default AboutPage;
