import { giveValidNumber, formatTime } from './index';

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

it('should return 1 if trying to subtract 1 to 1', () => {
  const result = giveValidNumber('subtract', 1);
  expect(result).toBe(1);
});

it('should turn seconds into clock 00:00 format', () => {
  const result = formatTime(120);
  expect(result).toBe('02:00');
});

it('should turn seconds into clock 00:00 format considering seconds', () => {
  const result = formatTime(119);
  expect(result).toBe('01:59');
});
