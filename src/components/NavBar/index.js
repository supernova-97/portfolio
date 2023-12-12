import { Route, Routes, Link } from "react-router-dom";
import Homepage from "../Homepage";
import Calculator from "../Calculator";
import Weather from "../Weather-App";
import ToDo from "../To-Do";
import styled from "styled-components";
import home from "../../icons/home.png";
import projects from "../../icons/project.png";
import arrow from "../../icons/arrow.png";

export default function NavBar() {
  return (
    <>
      <Nav>
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
              <Span>Projects</Span>
            </Div>
          </ListItem>
          <SubMenu>
            <SubMenu_ListItem>
              <NavbarLink to="/calculator">
                <Span>Calculator</Span>
              </NavbarLink>
            </SubMenu_ListItem>
            <SubMenu_ListItem>
              <NavbarLink to="/weather">
                <Span>Weather Forecast</Span>
              </NavbarLink>
            </SubMenu_ListItem>
            <SubMenu_ListItem>
              <NavbarLink to="/todo">
                <Span>ToDo List</Span>
              </NavbarLink>
            </SubMenu_ListItem>
            <SubMenu_ListItem>
              <NavbarLink to="/test">
                <Span>Test</Span>
              </NavbarLink>
            </SubMenu_ListItem>
          </SubMenu>
        </NavList>
      </Nav>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/todo" element={<ToDo />} />
      </Routes>
    </>
  );
}

const Nav = styled.nav`
  width: 100%;
  display: flex;
  border-bottom: 1px solid black;
  background-color: #dbe2ef;
  border-radius: 0 0 10px 10px;
`;

const NavList = styled.ul`
position: relative;
  width: 6rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #000;
  padding: 0px;
  list-style-type: none;
  transition: 150ms ease-out;

  &:hover {
    width: 8rem;
    /* opacity: 0.8; */

    span,
    h2 {
      display: inline;
    }
  }
`;

const NavbarLink = styled(Link)`
  color: #fff;
  text-decoration: none;
`;

const SubMenu = styled.ul`
  display: flex;
  flex-direction: column;
  position: relative;
  left: 100%;
  bottom: 42px;
  background-color: #000;
  width: 10rem;
  padding: 0;
`;

const SubMenu_ListItem = styled.li`
margin: 5px;
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
