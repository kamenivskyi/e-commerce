import React from 'react';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import shopData from './shop.data';

class ShopPage extends React.Component {
  state = {
    collections: shopData
  };

  render() {
    const { collections } = this.state;

    return (
      <div className='shop-page'>
        <div className='container'>
          {collections.map(({ id, ...otherProps }) => (
            <CollectionPreview key={id} {...otherProps} />
          ))}
        </div>
      </div>
    );
  }
}
export default ShopPage;
