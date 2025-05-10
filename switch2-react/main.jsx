import React, { useState, useEffect } from 'react';

const CountDownToMario = ({ endTime = "September 30, 2025 12:01 AM" }) => {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const end = new Date(endTime).getTime();
    const _second = 1000;
    const _minute = _second * 60;
    const _hour = _minute * 60;
    const _day = _hour * 24;

    const pad = (n) => String(n).padStart(2, '0');

    const showRemaining = () => {
      const now = new Date().getTime();
      const distance = end - now;

      if (distance <= 0) {
        setTimeLeft("Hype Time!");
      } else {
        const days = Math.floor(distance / _day);
        const hours = Math.floor((distance % _day) / _hour);
        const minutes = Math.floor((distance % _hour) / _minute);
        const seconds = Math.floor((distance % _minute) / _second);
        setTimeLeft(`${pad(days)}:${pad(hours)}:${pad(minutes)}:${pad(seconds)}`);
      }
    };

    // Call once to set immediate output
    showRemaining();
    const timer = setInterval(showRemaining, 1000);

    return () => clearInterval(timer); // cleanup on unmount
  }, [endTime]);

  return (
    <div id="countdown">
      {timeLeft}
    </div>
  );
};

export default CountDownToMario;