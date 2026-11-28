import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    INCREMENT_QUANTITY,
    DECREMENT_QUANTITY
} from './actions';

const initialState = {
    items: []
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            const newItem = action.payload;
            const existingIndex = state.items.findIndex(
                (item) => item.id === newItem.id && item.color === newItem.color
            );

            if (existingIndex !== -1) {
                const updatedItems = state.items.map((item, index) =>
                    index === existingIndex
                        ? { ...item, quantity: item.quantity + newItem.quantity }
                        : item
                );
                return { ...state, items: updatedItems };
            }

            return {
                ...state,
                items: [...state.items, newItem]
            };
        }

        case REMOVE_FROM_CART: {
            const { id, color } = action.payload;
            return {
                ...state,
                items: state.items.filter(
                    (item) => !(item.id === id && item.color === color)
                )
            };
        }

        case INCREMENT_QUANTITY: {
            const { id, color } = action.payload;
            return {
                ...state,
                items: state.items.map((item) =>
                    item.id === id && item.color === color
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            };
        }

        case DECREMENT_QUANTITY: {
            const { id, color } = action.payload;
            return {
                ...state,
                items: state.items.map((item) =>
                    item.id === id && item.color === color && item.quantity > 1
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
            };
        }

        default:
            return state;
    }
};