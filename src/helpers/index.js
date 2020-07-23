export const giveValidNumber = (operator, number) => {
  switch (operator) {
    case 'add':
      if (number === 60) {
        return number;
      }
      return number + 1;

    case 'subtract':
      if (number === 0) {
        return number;
      }
      return number - 1;
    default:
      return number;
  }
};
