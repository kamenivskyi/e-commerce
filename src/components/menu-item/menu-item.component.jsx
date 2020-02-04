import React from 'react';
import { Link } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, linkUrl }) => (
  <Link to={linkUrl} className={`${size} menu-item`}>
    <div
      className='backgroud-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='content'>
      <h3 className='title'>{title.toUpperCase()}</h3>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </Link>
);
export default MenuItem;
