import React from 'react';
import CountDownToMario from './CountDownToMario';
import picHate from './assets/switch2imgmini.png';

const App = () => {
  return (
    <div
      style={{
        backgroundColor: 'red',
        height: '100vh',
        width: '100vw',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        margin: 0,
      }}
    >
      <img
        src={picHate}
        alt="Switch 2 Logo"
        style={{
          maxWidth: '500px',
          width: '100%',
          height: 'auto',
          marginBottom: '2rem',
        }}
      />

      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
        Countdown to Mario!
      </h1>

      <CountDownToMario endTime="September 30, 2025 12:01 AM" />
    </div>
  );
};

export default App;
