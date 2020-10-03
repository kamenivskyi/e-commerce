import React from 'react';
import { connect } from 'react-redux';

import { deleteItemFromCart } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({ item, deleteItem }) => {
  const { imageUrl, name, quantity, price } = item;

  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt={name} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>{quantity}</span>
      <span className='price'>$ {price}</span>
      <button className='remove-button' onClick={() => deleteItem(item)}>
        &#10005;
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteItem: (item) => dispatch(deleteItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
