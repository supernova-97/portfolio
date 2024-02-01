import styled from "styled-components";
import ShopNavBar from "./shopnavbar";
import { useState, useEffect } from "react";

export default function Index() {
  const [order, setOrder] = useState([]);
  const [popUp, setPopUp] = useState(false); // for cart popup

  // Initialize totalAmount state
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const amount = order.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price;
    }, 0);
    setTotalAmount(amount);
  }, [order]);

  function handleSubmit(e, seed) {
    e.preventDefault();

    const inputQuantity = parseInt(e.target.elements.quantity.value);
    if (!isNaN(inputQuantity)) {
      setOrder((prevOrder) => {
        const existingProductIndex = prevOrder.findIndex(
          (item) => item.name === seed.name
        );

        if (existingProductIndex !== -1) {
          const updatedOrder = [...prevOrder];
          updatedOrder[existingProductIndex].quantity += inputQuantity;
          updatedOrder[existingProductIndex].price +=
            inputQuantity * parseInt(seed.price);

          return updatedOrder;
        } else {
          return [
            ...prevOrder,
            {
              name: seed.name,
              quantity: inputQuantity,
              price: inputQuantity * parseInt(seed.price),
            },
          ];
        }
      });
      e.target.reset();
    }
  }

  console.log(order);

  // cart popup
  function handleOrderSubmit(e) {
    if (Object.keys(order).length > 0) {
      e.preventDefault();
      setPopUp(true);
      setOrder([]);

    } else {
      alert("Can not place an empty order.");
    }
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
        totalAmount={totalAmount}
      />
    </Main>
  );
}

const Main = styled.main`
  margin-left: 5rem;
`;
