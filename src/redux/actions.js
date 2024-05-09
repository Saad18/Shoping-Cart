import {
  ADD_NEW_PRODUCT,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  DECREMENT_ITEM_QUANTITY,
  INCREMENT_ITEM_QUANTITY,
} from "./actionTypes";

export const addNewProduct = (product) => {
  return {
    type: ADD_NEW_PRODUCT,
    payload: product,
  };
};

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: id,
});

export const incrementItemQuantity = (id) => ({
  type: INCREMENT_ITEM_QUANTITY,
  payload: id,
});

export const decrementItemQuantity = (id) => ({
  type: DECREMENT_ITEM_QUANTITY,
  payload: id,
});
