import Types from './cart.types';

export const toggleCartHidden = () => ({
  type: Types.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: Types.ADD_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: Types.REMOVE_ITEM,
  payload: item,
});

export const clearItemFromCart = (item) => ({
  type: Types.CLEAR_ITEM_FROM_CART,
  payload: item,
});
