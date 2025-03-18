import { useState, useEffect } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10); // Increment by 10 milliseconds
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval); // Cleanup
  }, [isRunning]);

  const formatTime = () => {
    const minutes = Math.floor((time / 60000) % 60);
    const seconds = Math.floor((time / 1000) % 60);
    const milliseconds = Math.floor((time % 1000) / 10);

    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}:${String(milliseconds).padStart(2, "0")}`;
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.time}>{formatTime()}</h1>
      <div style={styles.buttons}>
        <button onClick={() => setIsRunning(true)}>Start</button>
        <button onClick={() => setIsRunning(false)}>Stop</button>
        <button onClick={() => setTime(0)}>Reset</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
  },
  time: {
    fontSize: "48px",
    marginBottom: "20px",
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
};

export default Stopwatch;
