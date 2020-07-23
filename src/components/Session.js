import React from 'react';
import { connect } from 'react-redux';
import { addMinuteSession, subtractMinuteSession } from '../actions';

const Session = ({ subtractMinuteSession, addMinuteSession, sessionTime }) => {
  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '5px' }}>
      <div id="session-label">Session Length</div>
      <button id="session-decrement" onClick={subtractMinuteSession}>
        - session
      </button>
      <button id="session-increment" onClick={addMinuteSession}>
        + session
      </button>
      <div id="session-length">{sessionTime}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { sessionTime: state.sessionTime };
};

export default connect(mapStateToProps, {
  addMinuteSession,
  subtractMinuteSession,
})(Session);
