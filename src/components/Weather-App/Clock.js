import React, { useState, useEffect } from "react";
import styled from "styled-components";

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
    <Wrapper>
      <StyledClock>{formattedTime}</StyledClock>
    </Wrapper>
  );
}

export default Clock;

const StyledClock = styled.h2`
background-color: #ffffff20;
  border: 2px solid black;
  border-radius: 5px;
  padding: 10px;
  margin: 30px;
  width: fit-content;
  box-shadow: -4px 5px 11px 0px #000;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
