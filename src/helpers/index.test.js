import { giveValidNumber } from './index';

it('should perform an adding operation and return a number', () => {
  const result = giveValidNumber('add', 1);
  expect(result).toBe(2);
});

it('should perform a subtracting operation and return a number', () => {
  const result = giveValidNumber('subtract', 3);
  expect(result).toBe(2);
});

it('should return 60 if trying to add 1 to 60', () => {
  const result = giveValidNumber('add', 60);
  expect(result).toBe(60);
});

it('should return 0 if trying to subtract 1 to 0', () => {
  const result = giveValidNumber('subtract', 0);
  expect(result).toBe(0);
});
