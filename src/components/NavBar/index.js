import { Route, Routes, Link } from "react-router-dom";
import { BurgerMenu } from "./BurgerMenu.";
import Homepage from "../Homepage";
import Calculator from "../Calculator";
import Weather from "../Weather-App";
import ToDo from "../To-Do";
import DollyParton from "../DollyParton";
import MusicApp from "../MusicApp";
import styled from "styled-components";
import home from "../../icons/home.png";
import projects from "../../icons/project.png";
import arrow from "../../icons/arrow.png";

export default function NavBar() {
  return (
    <>
      <BurgerMenu />
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
            <Projects>Projects</Projects>
          </Div>
        </ListItem>
        <SubMenu>
          <SubMenuItems>
            <li>
              <NavbarLink to="/weather">
                <AppLink>Weather App</AppLink>
              </NavbarLink>
            </li>
            <li>
              <NavbarLink to="/dolly-parton-wiki">
                <AppLink>Dolly Parton Wiki</AppLink>
              </NavbarLink>
            </li>
            <li>
              <NavbarLink to="/music">
                <AppLink>VibeVault</AppLink>
              </NavbarLink>
            </li>
            <li>
              <NavbarLink to="/todo">
                <AppLink>ToDo List</AppLink>
              </NavbarLink>
            </li>
            <li>
              <NavbarLink to="/calculator">
                <AppLink>Calculator</AppLink>
              </NavbarLink>
            </li>
          </SubMenuItems>
        </SubMenu>
      </NavList>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/todo" element={<ToDo />} />
        <Route path="/dolly-parton-wiki" element={<DollyParton />} />
        <Route path="/music" element={<MusicApp />} />
      </Routes>
    </>
  );
}

const SubMenu = styled.div`
  display: none;
`;

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
  z-index: 2;

  &:hover {
    width: 8.5rem;

    span {
      display: inline;
    }

    ${SubMenu} {
      display: inline;
    }
  }

  @media screen and (max-width: 590px) {
    display: none;
  }
`;

const NavbarLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin: 0;
  z-index: 3;
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
  margin: 35px 0 0 15px;
`;

const Div = styled.div`
  display: flex;
  margin-bottom: 10px;
  align-items: center;
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

const Projects = styled.span`
  font-size: 1rem;
  color: white;
  margin-left: 10px;
  display: none;
`;

const SubMenuItems = styled.ul`
  display: flex;
  flex-direction: column;
  position: relative;
  left: 100%;
  bottom: 45px;
  background-color: #000;
  width: 6.5rem;
  padding: 0;
  border-radius: 0 10px 10px 0;
`;

const AppLink = styled.p`
  font-size: 16px;
  color: white;
  margin: 10px;

  &:hover {
    color: pink;
  }
`;
