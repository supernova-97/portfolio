import React from "react";
import "../../styles/homepage.css";
import styled from "styled-components";


export default function Homepage() {
  return (
    <>
      <Nav>
        <Link>Home</Link>
        <Link>Calculator</Link>
        <Link>Weather Forecast</Link>
      </Nav>
      <Wrapper>
        <h1>Welcome!</h1>
        <h2>To the place where I collect all my projects.</h2>
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

const Nav = styled.nav`
  display: flex;
  margin: 15px;
  border-bottom: 1px solid black;
`;

const Link = styled.a`
  margin: 5px;
  text-decoration: underline;
`;
