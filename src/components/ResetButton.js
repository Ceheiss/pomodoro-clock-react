import React from 'react';
import { connect } from 'react-redux';
import { reset } from '../actions';

const ResetButton = ({ reset }) => {
  return (
    <button id="reset" onClick={reset}>
      RESET
    </button>
  );
};

export default connect(null, { reset })(ResetButton);
