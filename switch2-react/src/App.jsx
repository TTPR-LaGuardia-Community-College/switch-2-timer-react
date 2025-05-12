import { useState, useEffect } from 'react'
import './index.css';



function App() {

  let [count, setCount] = useState(5);

  useEffect(() => {
    console.log("useEffect started");

    // Start the interval
    const intervalID = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
      console.log("Interval running: Count is", count );
    }, 1000);

    // Cleanup function to clear the interval
    return () => {
  
      clearInterval(intervalID);
      console.log("Interval cleared", intervalID);      
    
    };
  }, [count]); // Empty dependency array ensures this runs only on mount/unmount



  return (
    <>
      <div className="title">
        <img src="/switch2imgmini.png" />
      </div>
      <div className="coming-soon">
        <h3>Count Down:</h3>
        <h3>{count < 0 ?

          "YOU HIT THE ZERO!!" : count

        }</h3>

      </div>
      <div id="countdown"></div>
    </>
  )
}

export default App;
