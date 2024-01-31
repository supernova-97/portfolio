import styled from "styled-components";

import { seeds } from "../data";

export default function Seeds({order, handleSubmit}) {


  return (
    <Main>
      <CardContainer>
        {seeds.map((seed) => (
          <Card key={seed.name}>
            <Name>{seed.name}</Name>
            <img src={seed.src} height="60px" width="60px" alt={seed.name} />
            <Price>Price: {seed.price}G</Price>
            <Form onSubmit={(e) => handleSubmit(e, seed)}>
              <Input
                type="number"
                name="quantity"
                placeholder="e.g. 25"
                style={{ width: 80 }}
                min="0"
              />
              <CartButton type="submit">Add to cart</CartButton>
            </Form>
          </Card>
        ))}
      </CardContainer>
      <div>
        <h2>Order Summary</h2>
        <pre>{JSON.stringify(order)}</pre>
      </div>
    </Main>
  );
}

const Main = styled.main`
  margin-left: 5rem;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
  /* flex-wrap: wrap; */
`;

const Card = styled.div`
  border-radius: 5px;
  border: 1px solid #00000070;
  box-shadow: 0px 2px 9px 0px #00000030;
  width: 170px;
  min-width: 150px;
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
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
