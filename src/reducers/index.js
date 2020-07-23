import { combineReducers } from 'redux';
import { giveValidNumber } from '../helpers';

const breakTimeReducer = (state = 5, action) => {
  switch (action.type) {
    case 'ADD_MINUTE_BREAK':
      return giveValidNumber('add', state);
    case 'SUBTRACT_MINUTE_BREAK':
      return giveValidNumber('subtract', state);
    case 'RESET':
      return 5;
    default:
      return state;
  }
};

const sessionTimeReducer = (state = 25, action) => {
  switch (action.type) {
    case 'ADD_MINUTE_SESSION':
      return giveValidNumber('add', state);
    case 'SUBTRACT_MINUTE_SESSION':
      return giveValidNumber('subtract', state);
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
