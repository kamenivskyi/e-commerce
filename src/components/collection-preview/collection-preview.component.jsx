import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => {
  console.log(items);
  return (
    <div className='collection-preview'>
      <h3 className='title'>{title.toUpperCase()}</h3>
      <div className='preview'>
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherProps }) => (
            <CollectionItem key={id} {...otherProps} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
