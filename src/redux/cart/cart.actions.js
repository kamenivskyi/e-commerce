import Types from './cart.types';

export const toggleCartHidden = () => ({
  type: Types.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: Types.ADD_ITEM,
  payload: item,
});

export const deleteItemFromCart = (item) => ({
  type: Types.DELETE_ITEM_FROM_CART,
  payload: item,
});
