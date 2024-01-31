import styled from "styled-components";

export default function Cart({order}) {
    console.log(order.strawberry)
  return (
    <>
      <Main>
      <h1>Order Summary</h1>
        <ul>
          {Object.keys(order).map((itemName) => (
            <li key={itemName}>
              {itemName}: {order[itemName]}
            </li>
          ))}
        </ul>
      </Main>
    </>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw - 5rem;
  margin: 10px 0 10px 0;
  padding: 10px;
`;
