import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div id="break-length">5</div>
      <div id="session-length">25</div>
      <div id="timer-label">Inicio session</div>
      <div id="time-left">25:00</div>
      <div id="start_stop" onClick={() => console.log('start-stops')}>
        START-STOP
      </div>
      <div id="reset" onClick={() => console.log('reset')}>
        RESET
      </div>
      <div>
        <div
          id="break-decrement"
          onClick={() => console.log('break decrement')}
        >
          Break -
        </div>
        <div
          id="break-increment"
          onClick={() => console.log('break increment')}
        >
          Break +
        </div>
        <div id="break-label">Break Length</div>
      </div>
      <div>
        <div id="session-label">Session Length</div>
        <div
          id="session-decrement"
          onClick={() => console.log('session decrement')}
        >
          - session
        </div>
        <div
          id="session-increment"
          onClick={() => console.log('break increment')}
        >
          + session
        </div>
      </div>
    </div>
  );
};

export default App;
