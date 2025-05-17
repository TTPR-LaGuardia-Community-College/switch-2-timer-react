import { useState } from 'react'
import Countdown from './Countdown.jsx'
import switch2logo from './switch2logo.svg'
import './App.css'


function App() {
  

  return (
    <>
      <div>
          <img src={switch2logo} className="logo" alt="Switch2 logo" />
          <Countdown />
      </div>
    </>
  )
}

export default App
