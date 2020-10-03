import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';

import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, cartTotal }) => {
  console.log(cartItems);
  return (
    <section className='checkout-page'>
      <div className='container'>
        <header className='checkout-header'>
          <div className='header-block'>
            <span>Product</span>
          </div>
          <div className='header-block'>
            <span>Description</span>
          </div>
          <div className='header-block'>
            <span>Price</span>
          </div>
          <div className='header-block'>
            <span>Quantity</span>
          </div>
          <div className='header-block'>
            <span>Remove</span>
          </div>
        </header>
        {cartItems.length
          ? cartItems.map((item) => <CheckoutItem item={item} key={item.id} />)
          : ''}
        <span className='total'>TOTAL: {cartTotal}</span>
      </div>
    </section>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
});
export default connect(mapStateToProps)(CheckoutPage);