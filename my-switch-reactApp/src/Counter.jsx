import {useEffect, useState} from "react";

function Counter() {
    const end = new Date('06/05/2025 12:01 AM').getTime();
    // comment the last line and uncomment the next line for testing
    // const end = new Date().getTime() + 1000 * 10;

    const [timeLeft, setTimeLeft] = useState({
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00'
    });

    const [isOver, setOver] = useState(false);

    const pad = (n) => String(n).padStart(2, '0');

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = end - now;

            if (distance <= 0) {
                clearInterval(interval);
                setTimeLeft({
                    days: '00',
                    hours: '00',
                    minutes: '00',
                    seconds: '00'
                });

                setOver(true);

                return
            }

            const _second = 1000;
            const _minute = _second * 60;
            const _hour = _minute * 60;
            const _day = _hour * 24;

            const days = Math.floor(distance / _day);
            const hours = Math.floor((distance % _day) / _hour);
            const minutes = Math.floor((distance % _hour) / _minute);
            const seconds = Math.floor((distance % _minute) / _second);

            setTimeLeft({
                days: pad(days),
                hours: pad(hours),
                minutes: pad(minutes),
                seconds: pad(seconds)
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    function Display() {
        return (
            isOver ?
                <h2>
                    Switch2 in now available!
                </h2>
                :
                <h2>
                    {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m : {timeLeft.seconds}
                </h2>
        )
    }

    return (
        <div className="container text-center text-white">
            <h1 className="mb-4">Countdown to June 5, 2025</h1>
            <Display/>
        </div>
    );
}

export default Counter;