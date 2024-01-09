import styled from "styled-components";
import { useState } from "react";
import strawberry from "../../icons/seeds.strawberry.png";

export default function Shop() {
  const [login, setLogin] = useState(false);
  return (
    <Main>
      <NavBar>
        <NavLinksLeft>
          <NavLink>Home</NavLink>
          <NavLink>Seeds</NavLink>
          <NavLink>Artisan-Goods</NavLink>
          <NavLink>Animals</NavLink>
        </NavLinksLeft>
        <NavLinksRight>
          {login ? <NavLink>Profile</NavLink> : <NavLink>Log In</NavLink>}
          <NavLink>Cart</NavLink>
        </NavLinksRight>
      </NavBar>
      <Card>
        <p>Strawberry Seed</p>
        <img src={strawberry} height="60px" width="60px" />
        <p>Quantity</p>
        <input type="number" placeholder="e.g. 25" style={{width: 80}} /> 
        <button>Add to cart</button>
      </Card>
    </Main>
  );
}

const Main = styled.main`
  margin-left: 5rem;
`;

const NavBar = styled.div`
  height: 4rem;
  width: calc(100vw - 5rem);
  background-color: green;
  display: flex;
  justify-content: space-between;
`;

const NavLinksLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const NavLinksRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const NavLink = styled.a`
  margin: 10px;
  font-size: 1.5rem;
  text-decoration: underline;
  cursor: pointer;
  background-color: lightgreen;
  padding: 5px;
  border-radius: 5px;

  &:hover {
    color: red;
  }
`;

const Card = styled.div`
  border: 1px solid blue;
  border-radius: 10px;
  width: fit-content;
  padding: 10px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
