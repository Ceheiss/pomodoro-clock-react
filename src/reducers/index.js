import { combineReducers } from 'redux';

const breakTimeReducer = (state = 5, action) => {
  switch (action.type) {
    case 'ADD_MINUTE_BREAK':
      return state + 1;
    case 'SUBTRACT_MINUTE_BREAK':
      return state - 1;
    case 'RESET':
      return 5;
    default:
      return state;
  }
};

const sessionTimeReducer = (state = 25, action) => {
  switch (action.type) {
    case 'ADD_MINUTE_SESSION':
      return state + 1;
    case 'SUBTRACT_MINUTE_SESSION':
      return state - 1;
    case 'RESET':
      return 25;
    default:
      return state;
  }
};

export default combineReducers({
  breakTime: breakTimeReducer,
  sessionTime: sessionTimeReducer,
});
