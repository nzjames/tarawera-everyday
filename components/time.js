import React, { useState, useEffect } from "react";

//let timer;

export const Time = () => {
  const formatTime = (date) => {
    const formattedTime = {
      hours: date.getHours(),
      minutes: date.getMinutes().toString().padStart(2, "0"),
      seconds: date.getSeconds().toString().padStart(2, "0"),
    };
    //console.log(formattedTime);
    return formattedTime;
  };

  const initialTime = formatTime(new Date());

  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(formatTime(new Date()));
    }, 10000);
    return () => {
      clearInterval(timer);
    };
  });

  return (
    <div>
      <span className="time">
        {time.hours}:{time.minutes}
      </span>
    </div>
  );
};

export default Time;
