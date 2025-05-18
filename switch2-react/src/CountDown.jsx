import { useState, useEffect } from "react";

// Time constants
const _second = 1000;
const _minute = _second * 60;
const _hour   = _minute * 60;
const _day    = _hour * 24;

function CountDown({launch}) {
	const [timeLeft, setTimeLeft] = useState(new Date(launch) - new Date());

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(timeLeft => timeLeft - 1000);
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	const days = Math.floor(timeLeft / _day);
	const hrs = Math.floor((timeLeft % _day) / _hour);
	const mins = Math.floor((timeLeft % _hour) / _minute);
	const secs = Math.floor((timeLeft % _minute) / _second);

	const pad = n => String(n).padStart(2, "0");

	const timerContent = 
	`${pad(days)} days ${pad(hrs)} hrs 
	${pad(mins)} mins ${pad(secs)} secs`;

	let content = timeLeft > 0 ? timerContent : "Switch 2 is out! 🎉"

	return (
		<>
			<div>
				{content}
			</div>
		</>
	)
}

export default CountDown
