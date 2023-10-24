import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Homepage from "./components/Homepage";
import Calculator from "./components/Calculator";
import Weather from "./components/Weather-App";
import ToDo from "./components/To-Do";
import styled from "styled-components";
import Test from "./components/Test/Test";

export default function App() {
  
  return (
    <>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/calculator">Calculator</Link>
        <Link to="/weather">Weather Forecast</Link>
        <Link to="/todo">ToDo List</Link>
        <Link to="/test">Test</Link>
      </Nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/todo" element={<ToDo />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </>
  );
}

const Nav = styled.nav`
  display: flex;
  margin: 15px;
  border-bottom: 1px solid black;
`;
