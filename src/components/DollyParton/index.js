import styled from "styled-components";
import { useState, useEffect } from "react";

import { data } from "./data";

export default function DollyParton() {
  const storedImageIndex = localStorage.getItem("imageIndex");
  const initialImageIndex = storedImageIndex
    ? parseInt(storedImageIndex, 10)
    : 0;

  const [imageIndex, setImageIndex] = useState(initialImageIndex);

  useEffect(() => {
    localStorage.setItem("imageIndex", imageIndex.toString());
  }, [imageIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((index) => {
        if (index === data.length - 1) return 0;
        return index + 1;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  function nextImage() {
    setImageIndex((index) => {
      if (index === data.length - 1) return 0;
      return index + 1;
    });
  }
  function prevImage() {
    setImageIndex((index) => {
      if (index === 0) return data.length - 1;
      return index - 1;
    });
  }

  return (
    <Main>
      <MainSection>
        <TextSection>
          <Heading>{data[imageIndex].title}</Heading>
          <Text>{data[imageIndex].desc}</Text>
        </TextSection>
        <ButtonContainer>
          <PrevButton onClick={prevImage}>&lt; Previous</PrevButton>
          <Divider></Divider>
          <NextButton onClick={nextImage}>Next &gt;</NextButton>
        </ButtonContainer>
        <MobileButtonContainer>
          <MobilePrevButton onClick={prevImage}>Previous</MobilePrevButton>
          <MobileNextButton onClick={nextImage}>Next</MobileNextButton>
        </MobileButtonContainer>
      </MainSection>
      <ImageSection>
        {data.map((img, index) => (
          <Img
            key={index}
            src={img.image}
            alt={img.title}
            imageIndex={imageIndex}
          />
        ))}
      </ImageSection>
    </Main>
  );
}

const MainSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 50%;
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  z-index: 1;
`;

const Heading = styled.h1`
  margin-bottom: 20px;
  font-size: 3.5rem;
  font-weight: 700;
  font-family: "Playfair Display";
`;

const Text = styled.p`
  font-family: "Roboto Slab", serif;
  font-weight: 300;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  z-index: 1;
`;

const NextButton = styled.button`
  all: unset;
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    color: #00000070;
    transform: scale(1.05);
  }
`;

const PrevButton = styled.button`
  all: unset;
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    color: #00000070;
    transform: scale(1.05);
  }
`;

const Divider = styled.div`
  height: 60px;
  width: 1px;
  background-color: #000;
  margin: 0 30px;
`;

const ImageSection = styled.div`
  width: 35%;
  height: 100%;
  display: flex;
  overflow: hidden;
`;

const Img = styled.img`
  height: 100vh;
  width: 100%;
  object-fit: cover;
  transform: translateX(calc(-100% * ${(props) => props.imageIndex}));
  flex-shrink: 0;
  flex-grow: 0;
  transition: transform 300ms ease-in-out;
`;

const Main = styled.main`
  margin-left: 8rem;
  display: flex;
  justify-content: space-between;
  height: 100vh;
  width: auto;

  @media screen and (max-width: 590px) {
    margin: 0;

    ${ImageSection} {
      width: 100%;
      position: absolute;
    }

    ${Img} {
      z-index: -1;
    }

    ${MainSection} {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: flex-end;
    }

    ${TextSection} {
      padding: 20px;
      height: fit-content;
    }

    ${Heading} {
      font-size: 2.5rem;
      margin: 0;
      line-height: 40px;
      margin-bottom: 20px;
    }

    ${Text} {
      font-size: 1rem;
      margin: 0;
      margin-bottom: 20px;
    }

    ${ButtonContainer} {
      display: none;
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 1) 25%,
        rgba(255, 255, 255, 0) 70%
      );
    }
  }
`;

const MobilePrevButton = styled.button`
  display: none;
`;

const MobileNextButton = styled.button`
  display: none;
`;

const MobileButtonContainer = styled.div`
  display: none;

  @media screen and (max-width: 590px) {
    display: block;
    z-index: 2;
    padding: 20px;

    ${MobilePrevButton} {
      display: inline;
      padding: 5px 25px;
      width: 110px;
      border-radius: 40px;
      border: none;
      background-color: #e7e1c0;
      font-size: 0.9rem;
      font-weight: 500;
      font-family: "Roboto Slab", serif;
      margin-right: 20px;
    }

    ${MobileNextButton} {
      display: inline;
      padding: 5px 25px;
      width: 110px;
      border-radius: 40px;
      border: none;
      background-color: #e7e1c0;
      font-size: 0.9rem;
      font-weight: 500;
      font-family: "Roboto Slab", serif;
    }
  }
`;
