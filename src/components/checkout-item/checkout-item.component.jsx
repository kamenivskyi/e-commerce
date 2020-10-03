import React from 'react';
import { connect } from 'react-redux';

import {
  addItem,
  clearItemFromCart,
  removeItem,
} from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({ item, addItem, removeItem, clearItem }) => {
  const { imageUrl, name, quantity, price } = item;

  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt={name} />
      </div>
      <span className='name'>{name}</span>
      <div className='quantity'>
        <button className='arrow' onClick={() => removeItem(item)}>
          &#10094;{' '}
        </button>
        <span className='value'>{quantity}</span>
        <button className='arrow' onClick={() => addItem(item)}>
          &#10095;
        </button>
      </div>
      <span className='price'>$ {price}</span>
      <button
        title={`Delete ${name} item?`}
        className='remove-button'
        onClick={() => clearItem(item)}
      >
        &#10005;
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
