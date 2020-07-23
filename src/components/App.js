import React from 'react';
import './App.css';
import Session from './Session';
import Break from './Break';
import StartStopButton from './StartStopButton';
import ResetButton from './ResetButton';
import SessionDisplay from './SessionDisplay';

const App = () => {
  return (
    <div
      className="App"
      style={{ border: '1px solid black', padding: '10px', margin: '5px' }}
    >
      <SessionDisplay />
      <Break />
      <Session />
      <div
        style={{ border: '1px solid black', padding: '10px', margin: '5px' }}
      >
        <ResetButton />
        <StartStopButton />
      </div>
    </div>
  );
};

export default App;
