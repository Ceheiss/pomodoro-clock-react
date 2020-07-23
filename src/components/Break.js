import React from 'react';
import { connect } from 'react-redux';
import { addMinuteBreak, subtractMinuteBreak } from '../actions';

const Break = ({ breakTime, addMinuteBreak, subtractMinuteBreak }) => {
  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '5px' }}>
      <div id="break-label">Break Length</div>
      <button id="break-decrement" onClick={subtractMinuteBreak}>
        Break -
      </button>
      <button id="break-increment" onClick={addMinuteBreak}>
        Break +
      </button>
      <div id="break-length">{breakTime}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { breakTime: state.breakTime };
};

export default connect(mapStateToProps, {
  addMinuteBreak,
  subtractMinuteBreak,
})(Break);
