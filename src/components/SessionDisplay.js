import React from 'react';
import { connect } from 'react-redux';
import { formatTime } from '../helpers';

const SessionDisplay = ({ sessionTime, clock, isTimerOn }) => {
  let displayedTime;
  if (isTimerOn) {
    displayedTime = formatTime(clock);
  } else {
    displayedTime = formatTime(sessionTime * 60);
  }
  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '5px' }}>
      <div id="timer-label">Session</div>
      <div id="time-left">{displayedTime}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    sessionTime: state.sessionTime,
    clock: state.clock,
    isTimerOn: state.isTimerOn,
  };
};

export default connect(mapStateToProps)(SessionDisplay);
