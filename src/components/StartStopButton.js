import React from 'react';
import { connect } from 'react-redux';
import { startClock, toggleTimer } from '../actions';

const StartStopButton = ({
  startClock,
  sessionTime,
  toggleTimer,
  isTimerOn,
}) => {
  const onClickHandler = () => {
    toggleTimer();
    startClock(sessionTime);
  };

  return (
    <button id="start_stop" onClick={onClickHandler}>
      START-STOP
    </button>
  );
};

const mapStateToProps = (state) => {
  return {
    sessionTime: state.sessionTime,
    isTimerOn: state.isTimerOn,
  };
};

export default connect(mapStateToProps, { startClock, toggleTimer })(
  StartStopButton
);
