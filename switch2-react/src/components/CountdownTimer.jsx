import { useEffect, useState } from "react";

export default function CountdownTimer({ launchDate }) {
  const [timeLeft, setTimeLeft] = useState({});
  const [launched, setLaunched] = useState(false);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const target = new Date(launchDate);
      const diff = target - now;

      if (diff <= 0) {
        setLaunched(true);
        setTimeLeft({});
        clearInterval(timer);
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        setTimeLeft({
          days: String(days).padStart(2, '0'),
          hours: String(hours).padStart(2, '0'),
          minutes: String(minutes).padStart(2, '0'),
          seconds: String(seconds).padStart(2, '0'),
        });
      }
    };

    tick();
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, [launchDate]);

  if (launched) {
    return <h1>Switch 2 is out! 🎉</h1>;
  }

  return (
    <h1>
      {timeLeft.days}:{timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}
    </h1>
  );
}
