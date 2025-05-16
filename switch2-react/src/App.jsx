import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CountDown from './CountDown.jsx';


function App() {
  const launchDate = '2025-05-23T00:00:00'; 

  return (
    <div className="app-background">
      <h1>⏳ Switch 2 Countdown App Welcome</h1>
      <CountDown launchDate={launchDate} />
    </div>
  );
}

export default App;
