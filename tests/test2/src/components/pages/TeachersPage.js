import React from 'react';

import './TeachersPage.css';
import FetchImage from '../../scripts/FetchImage';

const TeachersPage = (props) => {
  return (
    <div className="teachers-page">
      <img src={FetchImage('teachers1')} alt="" srcset="" />
    </div>
  );
};

export default TeachersPage;
