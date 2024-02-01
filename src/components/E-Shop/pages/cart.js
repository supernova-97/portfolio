import styled from "styled-components";

export default function Cart({ order }) {
  return (
    <>
      <Main>
        <h1>Your order:</h1>
        <List>
          {Object.keys(order).map((itemName) => (
            <ListItem key={itemName}>
              <ItemWrapper>
                <P>{itemName}:</P> <P>{order[itemName]}</P>
              </ItemWrapper>
            </ListItem>
          ))}
        </List>
        <OrderButton>Order</OrderButton>
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

const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
`;

const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  width: 200px;
`;

const P = styled.p``;

const ListItem = styled.li`
  margin-top: 10px;
  font-size: 1.2rem;
  font-weight: 500;
  border-bottom: 1px solid black;
  padding: 5px;

  &:first-of-type {
    margin-top: 15px;
  }
  &:last-of-type {
    border-bottom: 1px solid #fff;
  }
`;

const OrderButton = styled.button`
  padding: 5px 25px;
  margin-top: 40px;
  border-radius: 30px;
  border: none;
  background-color: #00802b;
  color: #fff;
  font-size: 1.4rem;

  &:hover {
    background-color: #009632;
    cursor: pointer;
  }
`;
