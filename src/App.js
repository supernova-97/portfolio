import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Homepage from "./components/Homepage";
import Calculator from "./components/Calculator";
import Weather from "./components/Weather-App";
import styled from "styled-components";

export default function App() {
  
  return (
    <>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/calculator">Calculator</Link>
        <Link to="/weather">Weather Forecast</Link>
      </Nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/weather" element={<Weather />} />
      </Routes>
    </>
  );
}

const Nav = styled.nav`
  display: flex;
  margin: 15px;
  border-bottom: 1px solid black;
`;
