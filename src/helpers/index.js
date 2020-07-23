export const giveValidNumber = (operator, number) => {
  switch (operator) {
    case 'add':
      if (number === 60) {
        return number;
      }
      return number + 1;

    case 'subtract':
      if (number === 1) {
        return number;
      }
      return number - 1;
    default:
      return number;
  }
};

export const formatTime = (number) => {
  let minutes = Math.floor(number / 60);
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let seconds = number % 60;
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return `${minutes}:${seconds}`;
};
