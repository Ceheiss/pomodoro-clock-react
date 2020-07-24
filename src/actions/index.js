export const addMinuteBreak = () => ({
  type: 'ADD_MINUTE_BREAK',
});

export const subtractMinuteBreak = () => ({
  type: 'SUBTRACT_MINUTE_BREAK',
});

export const addMinuteSession = () => ({
  type: 'ADD_MINUTE_SESSION',
});

export const subtractMinuteSession = () => ({
  type: 'SUBTRACT_MINUTE_SESSION',
});

export const clockTick = () => ({
  type: 'CLOCK_TICK',
});

export const startClock = (session) => ({
  type: 'START_CLOCK',
  payload: session,
});

export const toggleTimer = () => ({ type: 'IS_TIMER_ON' });

export const reset = () => ({ type: 'RESET' });
