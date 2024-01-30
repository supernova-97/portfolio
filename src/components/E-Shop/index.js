import styled from "styled-components";
import ShopNavBar from "./shopnavbar";

export default function index() {
  return (
    <Main>
      <ShopNavBar />
    </Main>
  );
}

const Main = styled.main`
  margin-left: 5rem;
`;
