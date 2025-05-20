import Countdown from "./Countdown";
import "./App.css";
import switch2 from "./assets/switch2imgmini.png";

function App() {
    return (
        <div className="app">
            <img className="switch" src={switch2} alt="Switch2-logo" />
            
            <Countdown launchDate="2025-06-05T00:01:00" />
       </div>
       
    );
}

export default App;

