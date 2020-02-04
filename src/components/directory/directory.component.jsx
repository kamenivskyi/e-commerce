import React from 'react';

import MenuItem from '../menu-item/menu-item.component';
import { sections } from './directory.data.js.js';

import './directory.styles.scss';

const Directory = () => (
  <div className='homepage'>
    <div className='directory-menu'>
      {sections.map(({ title, imageUrl, size, id }) => (
        <MenuItem title={title} imageUrl={imageUrl} size={size} key={id} />
      ))}
    </div>
  </div>
);
export default Directory;
