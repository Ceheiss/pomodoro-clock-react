import React from 'react';
import { connect } from 'react-redux';
import { formatTime } from '../helpers';

const SessionDisplay = ({ sessionTime }) => {
  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '5px' }}>
      <div id="timer-label">Session</div>
      <div id="time-left">{formatTime(sessionTime * 60)}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    sessionTime: state.sessionTime,
  };
};

export default connect(mapStateToProps)(SessionDisplay);
