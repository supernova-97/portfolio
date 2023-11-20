import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Homepage from "./components/Homepage";
import Calculator from "./components/Calculator";
import Weather from "./components/Weather-App";
import ToDo from "./components/To-Do";
import styled from "styled-components";

export default function App() {
  return (
    <>
      <nav>
        <NavList>
          <li>
            <NavbarLink to="/">Home</NavbarLink>
          </li>
          <li>
            <NavbarLink to="/calculator">Calculator</NavbarLink>
          </li>
          <li>
            <NavbarLink to="/weather">Weather Forecast</NavbarLink>
          </li>
          <li>
            <NavbarLink to="/todo">ToDo List</NavbarLink>
          </li>
          <li>
            <NavbarLink to="/test">Test</NavbarLink>
          </li>
        </NavList>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/todo" element={<ToDo />} />
      </Routes>
    </>
  );
}

const NavList = styled.ul`
  position: fixed;
  width: 5rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #000;
  padding: 0px;
`;

const NavbarLink = styled(Link)`
  color: white;
`;
