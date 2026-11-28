export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const INCREMENT_QUANTITY = 'INCREMENT_QUANTITY';
export const DECREMENT_QUANTITY = 'DECREMENT_QUANTITY';

export const addToCart = (item) => ({
    type: ADD_TO_CART,
    payload: item
});

export const removeFromCart = (id, color) => ({
    type: REMOVE_FROM_CART,
    payload: { id, color }
});

export const incrementQuantity = (id, color) => ({
    type: INCREMENT_QUANTITY,
    payload: { id, color }
});

export const decrementQuantity = (id, color) => ({
    type: DECREMENT_QUANTITY,
    payload: { id, color }
});