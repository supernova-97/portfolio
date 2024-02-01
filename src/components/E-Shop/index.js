import styled from "styled-components";
import ShopNavBar from "./shopnavbar";
import { useState } from "react";

export default function Index() {
  const [order, setOrder] = useState([]);
  const [popUp, setPopUp] = useState(false); //for cart popup

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

  //cart popup
  function handleOrderSubmit(e) {
    console.log("Click");
    e.preventDefault();
    setPopUp(true);
    setOrder([])
  }

  function closePopUp() {
    setPopUp(false);
  }

  return (
    <Main>
      <ShopNavBar
        handleSubmit={handleSubmit}
        order={order}
        handleOrderSubmit={handleOrderSubmit}
        popUp={popUp}
        closePopUp={closePopUp}
      />
    </Main>
  );
}

const Main = styled.main`
  margin-left: 5rem;
`;
