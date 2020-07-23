import React from 'react';
import { connect } from 'react-redux';

const SessionDisplay = ({ sessionTime }) => {
  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '5px' }}>
      <div id="timer-label">Session</div>
      <div id="time-left">{sessionTime}:00</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { sessionTime: state.sessionTime };
};

export default connect(mapStateToProps)(SessionDisplay);
