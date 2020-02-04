import React from 'react';

import MenuItem from '../menu-item/menu-item.component';
import { sections } from './directory.data.js.js';

import './directory.styles.scss';

const Directory = () => (
  <div className='homepage'>
    <div className='directory-menu'>
      {sections.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
      ))}
    </div>
  </div>
);
export default Directory;
