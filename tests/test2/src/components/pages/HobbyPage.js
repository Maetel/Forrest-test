import React from 'react';

import './HobbyPage.css';
import FetchImage from '../../scripts/FetchImage';

const HobbyPage = (props) => {
  return (
    <div className="hobby-page">
      <img src={FetchImage('curri3')} alt="" srcset="" />
    </div>
  );
};

export default HobbyPage;
