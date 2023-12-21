import React from "react";
import "../../styles/homepage.css";
import styled from "styled-components";
import photo from "../../pictures/Bewerbungsfoto1.jpg";

export default function Homepage() {
  return (
    <>
      <Wrapper>
        <Name>Felix Buyni</Name>
        <Title>Front End Developer</Title>
        <Div>
          <Image src={photo} alt="my picture" />
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Elementum nibh tellus molestie nunc non blandit massa enim. Arcu
            cursus euismod quis viverra nibh cras pulvinar mattis. Sit amet
            consectetur adipiscing elit duis tristique.
          </Text>
        </Div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

const Name = styled.h1`
  font-family: "Lato", sans-serif;
  font-weight: 100;
  letter-spacing: 20px;
  font-size: 3rem;
  margin: 50px 0 10px 0;
`;

const Title = styled.h2`
  font-family: "Lato", sans-serif;
  font-weight: 500;
  letter-spacing: 5px;
`;

const Image = styled.img`
  height: 400px;
  width: 250px;
  border-radius: 5px;
  margin-top: 40px;
`;

const Div = styled.div`
  display: flex;
`;

const Text = styled.p`
  border: 2px solid red;
  width: 30%;
`;
