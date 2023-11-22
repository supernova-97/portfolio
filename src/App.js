import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Homepage from "./components/Homepage";
import Calculator from "./components/Calculator";
import Weather from "./components/Weather-App";
import ToDo from "./components/To-Do";
import styled from "styled-components";
import home from "./icons/home.png";
import projects from "./icons/project.png";
import arrow from "./icons/arrow.png";

export default function App() {
  return (
    <>
      <nav>
        <NavList>
          <Arrow src={arrow} height="40px" width="40px" />
          <ListItem>
            <NavbarLink to="/">
              <Div>
                <Icon src={home} />
                <Span>Home</Span>
              </Div>
            </NavbarLink>
          </ListItem>
          <ListItem>
            <Div>
              <Icon src={projects} />
              <SubHeader>Projects:</SubHeader>
            </Div>
          </ListItem>
          <ListItem>
            <NavbarLink to="/calculator">
              <Span>Calculator</Span>
            </NavbarLink>
          </ListItem>
          <ListItem>
            <NavbarLink to="/weather">
              <Span>Weather Forecast</Span>
            </NavbarLink>
          </ListItem>
          <ListItem>
            <NavbarLink to="/todo">
              <Span>ToDo List</Span>
            </NavbarLink>
          </ListItem>
          <ListItem>
            <NavbarLink to="/test">
              <Span>Test</Span>
            </NavbarLink>
          </ListItem>
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
  list-style-type: none;
  transition: 150ms ease-out;

  &:hover {
    width: 12rem;
    opacity: 0.8;

    span, h2 {
      display: inline;
    }

    /* img {
    transform: rotate(-180deg);
  } */
  }
`;

const NavbarLink = styled(Link)`
  color: #fff;
  text-decoration: none;
`;

const Span = styled.span`
  font-size: 1rem;
  color: white;
  margin-left: 10px;
  display: none;

  &:hover {
    color: pink;
  }
`;

const SubHeader = styled.h2`
  font-size: 1.1rem;
  color: #fff;
  margin-left: 10px;
  display: none;
`;

const Icon = styled.img`
  height: 30px;
  width: 30px;
`;

const Arrow = styled.img`
  height: 35px;
  width: 35px;
  margin: 15px 15px 30px 15px;
  transform: rotate(0deg);
  transition: transform 200ms;

  ${NavList}:hover & {
    transform: rotate(-180deg);
  }
`;

const ListItem = styled.li`
  margin: 5px 0 0 15px;
`;

const Div = styled.div`
  display: flex;
  margin-bottom: 10px;
  align-items: center;
`;
