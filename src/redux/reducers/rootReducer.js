import { combineReducers } from 'redux';
import dataReducer from './data';

// const counterReducer = {};
// const cartReducer = {};

const rootReducer = combineReducers({
  data: dataReducer,
  // cart: cartReducer
});

export default rootReducer;