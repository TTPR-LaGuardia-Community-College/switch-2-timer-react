import switch2Logo from './assets/switch2imgmini.png'
import CountDown from './CountDown'
import './App.css'

function App() {
  const launchDate = "06/05/2025 12:01 AM";

  return (
    <>
      <div className="title">
        <img src={switch2Logo}></img>
      </div>
      <div id="timers">
        <div className="countdown">
        <CountDown launch={launchDate}/>
        </div>
        <div className="countdown">
          <CountDown launch={launchDate}/>
        </div>
        <div className="countdown">
          <CountDown launch={launchDate}/>
        </div>
      </div>
    </>
  )
}

export default App
