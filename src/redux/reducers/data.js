import createDB from '../../utils/db';

const defaultState = {...createDB()};

const data = (state = defaultState, action) => {
  const {type, id} = action;
  switch (type) {
    case 'INCREMENT':
      return { 
        ...state, 
        [id]: {
        ...state[id],
        count: state[id].count + 1 
        }
      };
    case 'DECREMENT':
      return {
        ...state,
        [id]: {
          ...state[id],
          count: state[id].count > 0 ? + state[id].count - 1 : 0
        }
      };
    default:
      return state;
  }
};

export default data;