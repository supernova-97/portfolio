import styled from "styled-components";
import { Route, Routes, Link } from "react-router-dom";
import Seeds from "./pages/seeds";
import ShopHome from "./pages/home";
import Artisanal from "./pages/artisanal";
import Animals from "./pages/animals";
import Cart from "./pages/cart";

export default function ShopNavBar({
  handleSubmit,
  order,
  handleOrderSubmit,
  popUp,
  closePopUp,
}) {
  return (
    <>
      <NavBar>
        <NavLinksLeft>
          <StyledLink to="/shop/shophome">
            <NavLink>Home</NavLink>
          </StyledLink>
          <StyledLink to="/shop/seeds">
            <NavLink>Seeds</NavLink>
          </StyledLink>
          <StyledLink to="/shop/artisanal">
            <NavLink>Artisan-Goods</NavLink>
          </StyledLink>
          <StyledLink to="/shop/animals">
            <NavLink>Animals</NavLink>
          </StyledLink>
        </NavLinksLeft>
        <NavLinksRight>
          <NavLink>Profile</NavLink>
          <StyledLink to="/shop/cart">
            <NavLink>Cart</NavLink>
          </StyledLink>
        </NavLinksRight>
      </NavBar>

      <Routes>
        <Route index element={<ShopHome />} />
        <Route path="/shophome" element={<ShopHome />} />
        <Route
          path="/seeds"
          element={<Seeds order={order} handleSubmit={handleSubmit} />}
        />
        <Route path="/artisanal" element={<Artisanal />} />
        <Route path="/animals" element={<Animals />} />
        <Route
          path="/cart"
          element={
            <Cart
              order={order}
              handleOrderSubmit={handleOrderSubmit}
              popUp={popUp}
              closePopUp={closePopUp}
            />
          }
        />
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
  margin: 5px;
  font-size: 1.1rem;
  cursor: pointer;
  background-color: #ffffff6b;
  padding: 5px 15px;
  border-radius: 50px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: #00802b;
  }
`;
