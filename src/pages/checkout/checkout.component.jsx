import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';

import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, cartTotal }) => {
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

        {cartItems?.map((item) => <CheckoutItem item={item} key={item.id} />)}

        <footer className='checkout-footer'>
          <div className='total'>TOTAL: ${cartTotal}</div>
          <div className="test-warning">
            * Please use the following test credit card for payments *
            <span className='credit-card-example'>4242 4242 4242 4242 - Exp: 01/20 - CVV: 123 </span>
          </div>
          <StripeCheckoutButton price={cartTotal} />
        </footer>
      </div>
    </section>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
});
export default connect(mapStateToProps)(CheckoutPage);
