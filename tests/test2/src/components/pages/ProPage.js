import React from 'react';

import './ProPage.css';
import FetchImage from '../../scripts/FetchImage';

const ProPage = (props) => {
  return (
    <div className="pro-page">
      <img src={FetchImage('curri2')} alt="" srcset="" />
    </div>
  );
};

export default ProPage;
