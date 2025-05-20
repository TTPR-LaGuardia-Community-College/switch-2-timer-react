import { useState, useEffect } from "react";

const Countdown = ({ launchDate }) => {
    const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(launchDate));

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(calculateTimeLeft(launchDate));
        }, 1000);

        return () => clearInterval(interval); //  unmount
    }, [launchDate]);

    useEffect(() => {
        if (timeLeft.total <= 0) {
            document.getElementById("coinSound").play(); //  sound 
        }
    }, [timeLeft]);

    return (
        <div className="countdown-container">
            <h1>Countdown:</h1>
            {timeLeft.total > 0 ? (
                <h1>{`${timeLeft.days} days: ${timeLeft.hours} hrs: ${timeLeft.minutes} mins: ${timeLeft.seconds} secs`}</h1>
            ) : (
                <h1>🚀 Switch 2 is out! 🎉</h1>
            )}
            <audio id="coinSound" src="/assets/coin.wav"></audio>
        </div>
    );
};

const calculateTimeLeft = (launchDate) => {
    const difference = new Date(launchDate) - new Date();
    return {
        total: difference,
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
    };
};

export default Countdown;