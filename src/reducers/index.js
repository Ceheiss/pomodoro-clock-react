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

const clockReducer = (state = null, action) => {
  console.log(action);
  switch (action.type) {
    case 'CLOCK_TICK':
      console.log('Current state is: ', state);
      console.log('TICK CLOCK CALLED');
      return state - 1;
    case 'START_CLOCK':
      console.log("BIITCH I'm CALLES");
      const returnValue = action.payload * 60;
      console.log('RETURNS SHOUL MUDAFUCKING BEEE: ', returnValue);
      return returnValue;
    default:
      return state;
  }
};

// const clockReducer = (state = null, action) => {
//   switch (action.type) {
//     case 'START_CLOCK':
//       let time = action.payload * 60;
//       const timeHandler = () => {
//         if (time > 0) {
//           time = time - 1;
//           console.log('current time: ', time);
//           return time;
//         }
//         return 0;
//       };
//       setInterval(timeHandler, 1000);
//     default:
//       return state;
//   }
// };

const isTimerOnReducer = (state = false, action) => {
  switch (action.type) {
    case 'IS_TIMER_ON':
      return !state;
    default:
      return state;
  }
};

export default combineReducers({
  breakTime: breakTimeReducer,
  sessionTime: sessionTimeReducer,
  isTimerOn: isTimerOnReducer,
  clock: clockReducer,
});
