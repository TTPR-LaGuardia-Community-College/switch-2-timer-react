import { useEffect, useState } from "react";

export default function CountdownTimer({ launchDate }) {
  const calculateTimeLeft = () => {
    const now = new Date();
    const diff = new Date(launchDate) - now;

    if (diff <= 0) return null;

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [launched, setLaunched] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const time = calculateTimeLeft();
      if (!time) {
        setLaunched(true);
        setTimeLeft(null);
        clearInterval(interval);
      } else {
        setTimeLeft(time);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="timer-box">
      <img src="/Nintendo-Switch-2.webp" alt="Nintendo Switch" className="switch-img" />
      <h1 className="title">SWITCH countdown</h1>
      {launched ? (
        <div className="launched-text">Switch 2 is out! 🎉</div>
      ) : (
        timeLeft && (
          <div className="countdown-text">
            {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
          </div>
        )
      )}
    </div>
  );
}