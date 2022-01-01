import { useState, useEffect } from "react";

let Timer = ({ setStop, questionNumber }) => {
  const [Timer, setTimer] = useState(30);

  useEffect(() => {
    if (Timer === 0) return setStop(true);

    let interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [setStop, Timer]);

  useEffect(() => {
    setTimer(30);
  }, [questionNumber]);

  return Timer;
};

export default Timer;
