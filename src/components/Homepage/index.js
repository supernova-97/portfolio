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
        <ContentContainer>
          <Image src={photo} alt="my picture" />
          <Divider></Divider>
          <Text>
            Hi, I’m Felix and welcome to my portfolio website. I started my
            coding journey in 2022 when I decided I’ve had enough of the hotel
            business and finally went after my interest of making visually
            appealing and functional websites.
            <br />
            <br />
            I started on Codecademy, then completed a 3-month bootcamp. Pretty
            soon I landed my first job which unfortunately wasn’t a good fit.
            But I didn’t let that crush my hopes and so I started creating this
            portfolio project, in which I create various applications to
            practice and showcase my abilities.
            <br />
            <br />
            Please keep in mind that this is a work in progress, so some thing
            might not look too good or work as they should. I’m constantly
            working on and improving it.
            <br />
            <br />
            Have fun exploring!
          </Text>
        </ContentContainer>
      </Wrapper>
    </>
  );
}

const Name = styled.h1`
  font-family: "Lato", sans-serif;
  font-weight: 300;
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
  box-shadow: 0px 10px 20px 0px #c6c6c6;
`;

const Divider = styled.div`
  height: 350px;
  width: 1px;
  background-color: #00000040;
  margin: 50px;
`;

const Text = styled.p`
  width: 30%;
`;

const ContentContainer = styled.div`
  padding: 30px;
  margin-left: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  height: 100vh;

  @media screen and (max-width: 590px) {
    & ${ContentContainer} {
      margin: 0;
    }

    & ${Name} {
      font-weight: 300;
      letter-spacing: 15px;
      font-size: 2rem;
      margin: 50px 0 10px 0;
    }

    & ${Title} {
      font-size: 1.2rem;
      letter-spacing: 4px;
      margin-bottom: 20px;
    }

    & ${Image}, & ${Divider} {
      display: none;
    }

    & ${Text} {
      width: 100%;
    }
  }
`;
