import React from 'react';
import { Route } from 'react-router-dom';

import CollectionPage from '../collection/collection.component';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';

import './shop.styles.scss';

const ShopPage = ({ match }) => (
  <div className='shop-page'>
    <div className='container'>
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route
        exact
        path={`${match.path}/:collectionId`}
        component={CollectionPage}
      />
    </div>
  </div>
);

export default ShopPage;
