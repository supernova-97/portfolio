import styled from "styled-components";
import ShopNavBar from "./shopnavbar";
import { useState } from "react";

export default function Index() {
  const [order, setOrder] = useState([]);

  function handleSubmit(e, seed) {
    e.preventDefault();

    const inputQuantity = parseInt(e.target.elements.quantity.value);
    if (!isNaN(inputQuantity)) {
      setOrder((prevOrder) => {
        const currentQuantity = prevOrder[seed.name] || 0;
        const newQuantity = currentQuantity + inputQuantity;

        e.target.reset();

        return {
          ...prevOrder,
          [seed.name]: newQuantity,
        };
      });
    }
  }

  return (
    <Main>
      <ShopNavBar handleSubmit={handleSubmit} order={order}/>
    </Main>
  );
}

const Main = styled.main`
  margin-left: 5rem;
`;
