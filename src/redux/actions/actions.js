import {INCREMENT, DECREMENT} from '../constants';

export const incrementCount = id => ({
  type: INCREMENT,
  id,
});


export const decrementCount = id => ({
  type: DECREMENT,
  id,
});

export default {
  incrementCount,
  decrementCount,
};