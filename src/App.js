import "./styles.css";
import catGif from "./assets/cute-cats.gif";
import { useState, useEffect } from "react";

export default function App() {
  const [showCountdown, setShowCountdown] = useState(false);
  const [timeLeft, setTimeLeft] = useState({});

  // Set your meeting date here (YYYY, MM-1, DD, HH, MM)
  const meetingDate = new Date(2025, 0, 17, 17, 30); // Example: April 15, 2024, 12:00

  const calculateTimeLeft = () => {
    const difference = meetingDate - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  useEffect(() => {
    if (showCountdown) {
      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [showCountdown]);

  const handleClick = () => {
    setShowCountdown(true);
    setTimeLeft(calculateTimeLeft());
  };

  return (
    <div className="App">
      <div className="container">
        <h1>To Mimi ❤️</h1>
        <p className="heart">♥</p>
        <p>Hey pooks! I made this cuase I miss you!</p>

        {!showCountdown && (
          <button className="love-button" onClick={handleClick}>
            Click here
          </button>
        )}

        {showCountdown && Object.keys(timeLeft).length > 0 && (
          <div>
            <img 
              src={catGif} 
              alt="Cute animation" 
              className="cats-image"
              loop="infinite"
            />
            <h2>Time until we meet:</h2>
            <div className="countdown">
              <div className="countdown-segment">
                <p className="countdown-number">{timeLeft.days}</p>
                <p className="countdown-label">days</p>
              </div>
              <div className="countdown-segment">
                <p className="countdown-number">{timeLeft.hours}</p>
                <p className="countdown-label">hours</p>
              </div>
              <div className="countdown-segment">
                <p className="countdown-number">{timeLeft.minutes}</p>
                <p className="countdown-label">mins</p>
              </div>
              <div className="countdown-segment">
                <p className="countdown-number">{timeLeft.seconds}</p>
                <p className="countdown-label">secs</p>
              </div>
            </div>
            <p className="countdown-message">I can't wait to see you! 💖</p>
          </div>
        )}
      </div>
    </div>
  );
}
