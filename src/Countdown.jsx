import { useEffect, useState } from "react";

const Countdown = ({ targetDate = '06/05/2025 12:01 AM' }) => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const target = new Date(targetDate).getTime();

    const pad = n => String(n).padStart(2, '0');

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      const days = pad(Math.floor(difference / (1000 * 60 * 60 * 24)));
      const hours = pad(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      const minutes = pad(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)));
      const seconds = pad(Math.floor((difference % (1000 * 60)) / 1000));

      setTimeLeft({ days, hours, minutes, seconds });
    };

    calculateTimeLeft();
    const intervalId = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  return (
    <div>
      <h1>Countdown Timer</h1>
      <p>{`${timeLeft.days} Days ${timeLeft.hours} Hours ${timeLeft.minutes} Minutes ${timeLeft.seconds} Seconds`}</p>
    </div>
  );
}
export default Countdown