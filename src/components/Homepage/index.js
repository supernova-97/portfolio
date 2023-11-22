import React from "react";
import "../../styles/homepage.css";
import styled from "styled-components";


export default function Homepage() {
  return (
    <>
      <Wrapper>
        <h1>Felix Buyni</h1>
        <h2>Front End Developer</h2>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

