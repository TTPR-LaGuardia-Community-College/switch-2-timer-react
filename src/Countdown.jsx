import React, { useState, useEffect, useRef } from 'react';

const pad = n => String(n).padStart(2, '0');

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({});
  const [launched, setLaunched] = useState(false);
  const soundRef = useRef(null);

  useEffect(() => {
    const end = new Date(targetDate).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = end - now;

      if (distance <= 0) {
        clearInterval(timer);
        setLaunched(true);
        setTimeLeft({});
        if (soundRef.current) soundRef.current.play();
        if (typeof window.confetti === 'function') {
          window.confetti({ particleCount: 150, spread: 90 });
        }
        return;
      }

      setTimeLeft({
        days: pad(Math.floor(distance / (1000 * 60 * 60 * 24))),
        hours: pad(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))),
        minutes: pad(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))),
        seconds: pad(Math.floor((distance % (1000 * 60)) / 1000)),
      });
    };

    const timer = setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className={`countdown-wrapper ${launched ? 'launched' : ''}`}>
      {launched ? (
        <h2 classname = "timer-text">🎉 Switch 2 is out! 🎉</h2>
      ) : (
        <h2 classname = "timer-text">
          Days: {timeLeft.days} Hours: {timeLeft.hours} Minutes: {timeLeft.minutes} Seconds: {timeLeft.seconds}
        </h2>
      )}
      <audio ref={soundRef} src="/sounds/coin.mp3" preload="auto" />
    </div>
  );
};

export default Countdown
