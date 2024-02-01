import styled from "styled-components";

export default function Cart({
  order,
  popUp,
  handleOrderSubmit,
  closePopUp,
  totalAmount,
}) {
  return (
    <>
      <Main>
        <h1>Your order:</h1>
        <List>
          {order.map((item, index) => (
            <ListItem key={index}>
              <ItemWrapper>
                <P>{item.name}:</P>
                <P>{item.quantity}</P>
                <P>{item.price}G</P>
              </ItemWrapper>
            </ListItem>
          ))}
        </List>
        <p>{totalAmount}</p>
        <OrderButton type="submit" onClick={handleOrderSubmit}>
          Order
        </OrderButton>
        {popUp ? (
          <PopUp>
            <p>Order has been placed successfully!</p>
            <OrderSubmitButton onClick={closePopUp}>close</OrderSubmitButton>
          </PopUp>
        ) : (
          ""
        )}
      </Main>
    </>
  );
}

const PopUp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  padding: 65px;
  border-radius: 15px;
  width: 40%;
  height: 100px;
  box-shadow: 0px 2px 9px 0px #00000030;
`;

const OrderSubmitButton = styled.button`
  padding: 5px 15px;
  margin-top: 40px;
  border-radius: 30px;
  border: none;
  background-color: #00802b;
  color: #fff;
  font-size: 1rem;

  &:hover {
    background-color: #009632;
    cursor: pointer;
  }
`;

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
  width: 300px;
`;

const P = styled.p`
  margin: 0px 10px;
`;

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
