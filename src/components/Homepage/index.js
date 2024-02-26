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
            Hi, I’m Felix and welcome to my portfolio website. I started my
            coding journey in 2022 when I decided I’ve had enough of the hotel
            business and finally went after my interest of making visually
            appealing and functional websites.
            <br />
            I started on Codecademy, then completed a 3-month bootcamp. Pretty
            soon I landed my first job which unfortunately wasn’t a good fit.
            But I didn’t let that crush my hopes and so I started creating this
            portfolio project, in which I create various applications to
            practice and showcase my abilities.
            <br />
            Please keep in mind that this is a work in progress, so some thing
            might not look too good or work as they should. I’m constantly
            working on and improving it.
            <br />
            <br />
            Have fun exploring!
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
  margin-bottom: 40px;
`;

const Image = styled.img`
  height: 400px;
  width: 250px;
  border-radius: 5px;
  margin-top: 40px;
  margin-right: 30px;
  box-shadow: 0px 10px 20px 0px #c6c6c6;
`;

const Text = styled.p`
  width: 30%;
  margin: 30px;
  border-left: 1px solid black;
  padding: 50px;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
