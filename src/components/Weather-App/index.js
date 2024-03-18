import React from "react";
import { useState } from "react";
import TemperatureChart from "./TemperatureChart";
import Search from "./Search";
import { weatherDesc } from "./Data";
import { WEATHER_API_URL } from "./api";
import styled from "styled-components";
import sun from "../../icons/sun.png";
import cloud from "../../icons/cloud.png";
import rain from "../../icons/rain.png";
import thunder from "../../icons/thunder.png";
import snow from "../../icons/snow.png";

const mobileMediaQuery = "@media screen and (max-width: 590px)";

const getBackgroundColor = (weather) => {
  const colorMap = {
    sunny:
      "linear-gradient(210deg,rgba(255, 0, 229, 0) 38%,rgba(255, 235, 162, 1) 100%);",
    cloudy:
      "linear-gradient(210deg, rgba(255,0,229,0) 43%, rgba(136,148,154,1) 100%);",
    "partially cloudy":
      "linear-gradient(210deg, rgba(255,0,229,0) 43%, rgba(136,148,154,1) 100%);",
    rainy:
      "linear-gradient(210deg, rgba(255,0,229,0) 43%, rgba(84,131,254,1) 100%);",
    "heavy rain":
      "linear-gradient(210deg, rgba(255,0,229,0) 43%, rgba(84,131,254,1) 100%);",
    thunder:
      "linear-gradient(210deg, rgba(255,0,229,0) 43%, rgba(169,84,254,1) 100%);",
    snow: "linear-gradient(210deg, rgba(255,0,229,0) 43%, rgba(140,217,255,1) 100%);",
  };
  return (
    colorMap[weather] ||
    "linear-gradient(210deg, rgba(255, 255, 255, 0) 38%, rgba(255, 255, 255, 1) 100%)"
  );
};

export default function Weather() {
  const [data, setData] = useState("");

  const icons = {
    sunny: sun,
    cloudy: cloud,
    "partially cloudy": cloud,
    rainy: rain,
    "heavy rain": rain,
    thunder: thunder,
    snow: snow,
  };

  const weather = weatherDesc(data?.current?.weather_code ?? "Unknown");

  const images = [sun, cloud, rain, thunder, snow];

  async function handleOnSearchChange(searchData) {
    console.log("searchData", searchData);
    const [lat, lon] = searchData.value.split(" ");
    try {
      const response = await fetch(
        `${WEATHER_API_URL}/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,apparent_temperature,is_day,rain,snowfall,weather_code&hourly=temperature_2m,apparent_temperature,rain,snowfall,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=Europe%2FBerlin`
      );
      const weatherResponse = await response.json();
      setData({ city: searchData.label, ...weatherResponse });
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  }

  return (
    <Main>
      {data ? (
        <>
          <Search onSearchChange={handleOnSearchChange} />
          <MainHeader>The weather for {data.city}</MainHeader>
          <Wrapper>
            <SubWrapper weatherCode={weather}>
              <Styledh2>{data.city}</Styledh2>
              <WeatherCode>{weather}</WeatherCode>
              <Img src={icons[weather]} alt="weather code" />
              <Temp>
                {data.current.temperature_2m}
                {data.current_units.temperature_2m}
              </Temp>
              <DetailsWrapper>
                <DetailsLabel>Feels like:</DetailsLabel>
                <DetailsValue>
                  {data.current.apparent_temperature}
                  {data.current_units.apparent_temperature}
                </DetailsValue>
              </DetailsWrapper>
              <DetailsWrapper>
                <DetailsLabel>Rain:</DetailsLabel>
                <DetailsValue>
                  {data.current.rain}
                  {data.current_units.rain}
                </DetailsValue>
              </DetailsWrapper>
            </SubWrapper>
            <Showcase show={false}>
              {images.map((image) => (
                <ShowcaseImage key={image} src={image} />
              ))}
              <FunFact>
                Fun fact: I made all the icons myself using Blender!
              </FunFact>
            </Showcase>
          </Wrapper>
          <TemperatureChart weatherData={data} />
        </>
      ) : (
        <LandingWrapper>
          <MainHeader>Welcome to my weather app!</MainHeader>
          <SubHeader>Use the searchbar to search for a city!</SubHeader>
          <Search onSearchChange={handleOnSearchChange} />
          <Showcase show={true}>
            {images.map((image) => (
              <ShowcaseImage key={image} src={image} />
            ))}
            <FunFact>
              Fun fact: I made all the icons myself using Blender!
            </FunFact>
          </Showcase>
        </LandingWrapper>
      )}
    </Main>
  );
}

const Main = styled.main`
  @media screen and (max-width: 590px) {
    margin: 0;
  }
`;

const SubWrapper = styled.div`
  margin: 10px;
  border-radius: 20px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  box-shadow: 0px 10px 20px 0px #c6c6c6;
  background: ${(props) => getBackgroundColor(props.weatherCode)};
`;

const Temp = styled.span`
  font-size: 3.5rem;
  font-weight: 700;
  position: relative;
  margin: 10px;
`;

const Img = styled.img`
  height: 300px;
  width: 300px;
  position: relative;
`;

const MainHeader = styled.h1`
  margin: 20px;
  font-size: 3rem;
  font-family: "Bebas Neue", sans-serif;
  text-align: center;

  @media screen and (max-width: 590px) {
    font-size: 2rem;
  }
`;

const SubHeader = styled.h2`
  font-family: "Lato", sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 50px;
`;

const Styledh2 = styled.h2`
  font-size: 3rem;
  font-family: "Bebas Neue", sans-serif;
`;

const WeatherCode = styled.h3`
  font-family: "Bebas Neue", sans-serif;
`;

const DetailsLabel = styled.label`
  margin-right: 10px;
  font-family: "Roboto Condensed", sans-serif;
`;

const DetailsValue = styled.p`
  font-weight: 500;
  font-family: "Roboto Condensed", sans-serif;
`;

const DetailsWrapper = styled.div`
  display: flex;
`;

const Showcase = styled.div`
  margin: 50px;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 0px 10px 20px 0px #c6c6c6;
  width: 20%;
  height: fit-content;

  @media screen and (max-width: 590px) {
    display: ${({ show }) => (show ? "flex" : "none")};
  }
`;

const ShowcaseImage = styled.img`
  height: 100px;
  width: 100px;
`;

const FunFact = styled.p`
  text-align: center;
  margin-top: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 590px) {
    ${MainHeader} {
      font-size: 2rem;
    }

    ${Styledh2} {
      font-size: 2.2rem;
    }

    ${Img} {
      height: 250px;
      width: 250px;
    }
  }
`;

const LandingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 590px) {
    ${MainHeader} {
      font-size: 2rem;
      margin-top: 50px;
    }

    ${SubHeader} {
      font-size: 1.2rem;
    }

    ${Showcase} {
      width: 80%;
    }
  }
`;
