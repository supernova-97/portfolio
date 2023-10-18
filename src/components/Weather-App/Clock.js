import React, { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

 const formattedTime = time.toLocaleTimeString();

  return (
    <div>
     <p>{formattedTime}</p>
    </div>
  );
}

export default Clock;
