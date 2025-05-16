import { useState, useEffect } from 'react';

function CountDown({ launchDate }) {
  const calculateTimeLeft = () => {
    const difference = new Date(launchDate) - new Date();
    return difference > 0 ? Math.floor(difference / 1000) : 0;
  };

  const [secondsLeft, setSecondsLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft(prev => {
        const next = prev - 1;
        return next >= 0 ? next : 0;
      });
    }, 1000);

    return () => clearInterval(timer); 
  }, []);

  return (
    <div>
      {secondsLeft > 0 ? (
        <h2>Time left: {secondsLeft} seconds</h2>
      ) : (
        <h2>🎉 Now Switch 2 is out! by Sinem Kilicdere Moschos</h2>
      )}
    </div>
  );
}

export default CountDown;
