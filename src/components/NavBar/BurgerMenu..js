import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import burgermenu from "../../icons/burgermenu.png";

export function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <BurgerButton onClick={toggleMenu} />
      {isOpen && (
        <BurgerMenuWrapper>
          <CloseButton onClick={toggleMenu}>x</CloseButton>
          <NavbarLink to="/">
            <AppName>Home</AppName>
          </NavbarLink>
          <NavbarLink to="/dolly-parton-wiki">
            <AppName>Dolly Parton Wiki</AppName>
          </NavbarLink>
          <NavbarLink to="/music">
            <AppName>VibeVault</AppName>
          </NavbarLink>
          <NavbarLink to="/todo">
            <AppName>ToDo List</AppName>
          </NavbarLink>
          <NavbarLink to="/calculator">
            <AppName>Calculator</AppName>
          </NavbarLink>
        </BurgerMenuWrapper>
      )}
    </>
  );
}

const BurgerMenuWrapper = styled.div`
  background-color: #00000090;
  backdrop-filter: blur(3px);
  border-radius: 0 10px 10px 0;
  width: fit-content;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;

  @media screen and (min-width: 590px) {
    display: none;
  }
`;

const BurgerButton = styled.button`
  position: absolute;
  background-image: url(${burgermenu});
  background-size: cover;
  width: 30px;
  height: 30px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  z-index: 1;
`;

const CloseButton = styled.button`
  background-color: #00000060;
  color: #ffffff60;
  border: none;
  border-radius: 5px;
  margin-left: 5px;
  font-size: 1rem;
  box-shadow: 0px 0px 7px #ffffff;
`;

const NavbarLink = styled(Link)`
  font-size: 1.2rem;
  margin: 0;
  text-decoration: none;
`;

const AppName = styled.p`
  margin: 15px;
  font-weight: 700;
  font-family: "Lato", sans-serif;
  color: #fff;
`;
