import { legacy_createStore as createStore } from 'redux';
import { cartReducer } from './reducers';

export const store = createStore(cartReducer);