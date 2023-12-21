import styled from "styled-components";
import { useState, useEffect } from "react";
import Dolly1 from "../../pictures/Dolly1.jpg";
import Dolly2 from "../../pictures/Dolly2.jpg";
import Dolly3 from "../../pictures/Dolly3.jpg";
import Dolly4 from "../../pictures/Dolly4.jpg";
import Dolly5 from "../../pictures/Dolly5.jpg";
import Dolly6 from "../../pictures/Dolly6.jpg";

const data = [
  {
    image: Dolly1,
    title: "Joshua",
    desc: "A little bit down the railroad tracks, there is this little old run-down shack. Apparently the meanest man to ever exist lives right there. 'He couldn't be that mean', she thought and paid him a visit. Turns out he's really not mean and the two hit it off. Oh, and he has a cute dog, too. What a catch!",
  },
  {
    image: Dolly2,
    title: "Jolene",
    desc: "Oh she is all so perfect with her auburn hair and her ivory skin. She could have any man she wants, but of course she wants my man! But please, Jolene, you don't know what he means to me. He's the only one for me. We really need to talk. *cracks knuckels*",
  },
  {
    image: Dolly3,
    title: "Down from Dover",
    desc: "This song is about a young woman who was left by her boyfriend. She was abandoned by her family for getting pregnant. Now she's all alone with her unborn baby, but she still hasn't given up hope that her boyfriend will soon return.",
  },
  {
    image: Dolly4,
    title: "Dumb Blonde",
    desc: "That man really thought she was just a dumb blonde crying over him leaving. But joke's on him. She's having the time of her life without him.",
  },
  {
    image: Dolly5,
    title: "Travelin' Man",
    desc: "She could never tell her mother, but she is in love with that travelling man that has been selling his goods all around town. Soon, she will run away with him. Little did she know that her travelling man had others plans... with her mother.",
  },
  {
    image: Dolly6,
    title: "A Lil' Ole Bitty Pissant Country Place",
    desc: "In this classic from the 1982 movie 'The best little whorehouse in Texas', Miss Mona tells us all about her ways of running... well, what the movie title says. But there is nothing dirty going on!",
  },
];

export default function DollyParton() {
  const storedImageIndex = localStorage.getItem("imageIndex");
  const initialImageIndex = storedImageIndex
    ? parseInt(storedImageIndex, 10)
    : 0;

  const [imageIndex, setImageIndex] = useState(initialImageIndex);

  useEffect(() => {
    localStorage.setItem("imageIndex", imageIndex.toString());
  }, [imageIndex]);

  function prevImage() {
    setImageIndex((index) => {
      if (index === data.length - 1) return 0;
      return index + 1;
    });
  }
  function nextImage() {
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
          <p>{data[imageIndex].desc}</p>
        </TextSection>
        <div>
          <Button1 onClick={nextImage}>&lt; Previous</Button1>
          <Button2 onClick={prevImage}>Next &gt;</Button2>
        </div>
      </MainSection>
      <ImageSection>
        <Img src={data[imageIndex].image} alt="Dolly Parton" />
      </ImageSection>
    </Main>
  );
}

const Main = styled.main`
  margin-left: 8rem;
  display: flex;
  justify-content: space-between;
  height: 100vh;
  width: auto;
`;

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
`;

const Heading = styled.h1`
  margin-bottom: 20px;
  font-size: 3.5rem;
  font-weight: 700;
  font-family: "Playfair Display";
`;

const Button1 = styled.button`
  all: unset;
  font-size: 1.5rem;
  cursor: pointer;
`;

const Button2 = styled.button`
  all: unset;
  font-size: 1.5rem;
  margin-left: 20px;
  padding: 20px;
  border-left: 1px solid black;
  cursor: pointer;
`;

const ImageSection = styled.div`
  width: 40%;
`;

const Img = styled.img`
  height: 100vh;
  width: 100%;
  object-fit: cover;
`;
