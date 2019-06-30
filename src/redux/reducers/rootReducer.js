import { combineReducers } from 'redux';
import dataReducer from './data';

const rootReducer = combineReducers({
  data: dataReducer,
  // cart: cartReducer
});

export default rootReducer;