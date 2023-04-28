import React, { useState, useEffect } from "react";
import "./Countdown.css";

function Countdown() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const targetDate = new Date("May 29, 2023 19:00:00").getTime();

      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        setCountdown({
          days: `00`,
          hours: `00`,
          minutes: `00`,
          seconds: `00`,
        });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setCountdown({
          days: days < 10 ? "0" + days : days,
          hours: hours < 10 ? "0" + hours : hours,
          minutes: minutes < 10 ? "0" + minutes : minutes,
          seconds: seconds < 10 ? "0" + seconds : seconds,
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <ul className="countdown-flex">
      <li>
        <div>{countdown.days}</div>
        <div>hari</div>
      </li>
      <li>
        <div>{countdown.hours} </div>
        <div>jam</div>
      </li>
      <li>
        <div>{countdown.minutes} </div>
        <div>menit</div>
      </li>
      <li>
        <div>{countdown.seconds}</div>
        <div>detik</div>
      </li>
    </ul>
  );
}

export default Countdown;
