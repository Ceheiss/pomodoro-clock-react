import React from 'react';
import { connect } from 'react-redux';
import { toggleTimer, clockTick, startClock } from '../actions';

const StartStopButton = ({
  clock,
  sessionTime,
  toggleTimer,
  clockTick,
  startClock,
}) => {
  const onClickHandler = () => {
    toggleTimer();
    startClock(sessionTime);
    setInterval(() => {
      clockTick();
    }, 1000);
  };

  return (
    <button id="start_stop" onClick={() => onClickHandler(clock)}>
      START-STOP
    </button>
  );
};

const mapStateToProps = (state) => {
  return {
    sessionTime: state.sessionTime,
    clock: state.clock,
  };
};

export default connect(mapStateToProps, { toggleTimer, startClock, clockTick })(
  StartStopButton
);
