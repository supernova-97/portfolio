import styled from "styled-components";
import { Route, Routes, Link } from "react-router-dom";
import Seeds from "./seeds";
import ShopHome from "./home";
import Artisanal from "./artisanal";
import Animals from "./animals";

export default function ShopNavBar() {
  return (
    <>
      <NavBar>
        <NavLinksLeft>
          <Link to="/shop/shophome">
            <NavLink>Home</NavLink>
          </Link>
          <Link to="/shop/seeds">
            <NavLink>Seeds</NavLink>
          </Link>
          <Link to="/shop/artisanal">
            <NavLink>Artisan-Goods</NavLink>
          </Link>
          <Link to="/shop/animals">
            <NavLink>Animals</NavLink>
          </Link>
        </NavLinksLeft>
        <NavLinksRight>
          <NavLink>Profile</NavLink>
          <NavLink>Cart</NavLink>
        </NavLinksRight>
      </NavBar>

      <Routes>
        <Route index element={<ShopHome />} />
        <Route path="/shophome" element={<ShopHome />} />
        <Route path="/seeds" element={<Seeds />} />
        <Route path="/artisanal" element={<Artisanal />} />
        <Route path="/animals" element={<Animals />} />
      </Routes>
    </>
  );
}

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

const NavLink = styled.p`
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