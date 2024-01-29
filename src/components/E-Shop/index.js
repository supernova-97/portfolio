import styled from "styled-components";
import { useState } from "react";
import { seeds } from "./data";

export default function Shop() {
  const [login, setLogin] = useState(false);
  console.log(seeds);
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
      <CardContainer>
        {seeds.map((seed) => (
          <Card key={seed.name}>
            <Name>{seed.name}</Name>
            <img src={seed.src} height="60px" width="60px" alt={seed.name} />
            <Price>Price: {seed.price}</Price>
            <Input type="number" placeholder="e.g. 25" style={{ width: 80 }} />
            <CartButton>Add to cart</CartButton>
          </Card>
        ))}
      </CardContainer>
    </Main>
  );
}

const Main = styled.main`
  margin-left: 5rem;
`;

const NavBar = styled.div`
  height: 4rem;
  width: calc(100vw - 5rem);
  background-color: #00802b;
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
  font-size: 1.3rem;
  text-decoration: underline;
  cursor: pointer;
  background-color: lightgreen;
  padding: 5px;
  border-radius: 5px;

  &:hover {
    color: limegreen;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 70%;
`;

const Card = styled.div`
  border-radius: 5px;
  border: 1px solid #00000070;
  box-shadow: 0px 2px 9px 0px #00000030;
  width: 170px;
  padding: 20px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Name = styled.h2`
  font-size: 1.2rem;
  margin: 0 0 10px 0;
`;
const Price = styled.p`
  margin: 10px 0 0 0;
  font-weight: 500;
`;

const Input = styled.input`
  border-radius: 5px;
  border: 1px solid #00000060;
  padding: 2.5px;
  margin: 15px 0 5px 0;
`;

const CartButton = styled.button`
  padding: 5px 15px;
  margin-top: 10px;
  border-radius: 30px;
  border: none;
  background-color: #00802b;
  color: #fff;
  font-size: 0.7rem;

  &:hover {
    background-color: #009632;
    cursor: pointer;
  }
`;
