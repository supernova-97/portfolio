import React from "react";
import useSWR from "swr";
import Clock from "./Clock";
import TemperatureChart from "./TemperatureChart";
import { weatherDesc } from "./Data";
import styled from "styled-components";
import sun from "../../icons/sun.png";
import cloud from "../../icons/cloud.png";
import cloud2 from "../../icons/cloud2.png";
import rain from "../../icons/rain.png";
import rain2 from "../../icons/rain2.png";
import thunder from "../../icons/thunder.png";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Weather() {
  const { data, error, isLoading } = useSWR(
    "https://api.open-meteo.com/v1/forecast?latitude=52.5244&longitude=13.4105&current=temperature_2m,apparent_temperature,is_day,rain,weathercode,cloudcover,windspeed_10m,winddirection_10m&hourly=temperature_2m,apparent_temperature,weathercode,cloudcover&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&timezone=Europe%2FBerlin&forecast_days=1",
    fetcher
  );

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (error) {
    return <h2>Oops, we've run into an error: {error.message}</h2>;
  }
  if (!data) {
    return <h2>Could not fetch any data</h2>;
  }

  const weather = weatherDesc(data.current.weathercode);


  const icons = {
    sunny: sun,
    cloudy: cloud,
    "partially cloudy": cloud2,
    rainy: rain,
    "heavy rain": rain2,
    thunder: thunder,
  };


  return (
    <Body>
      <StyledHeading>Get the weather here!</StyledHeading>
      <Clock />
      <Wrapper>
        <CardWrapper>
          <Top>
            <TopHeader>
              <City>{data.timezone}</City>
              <Desc>{weather}</Desc>
            </TopHeader>
            <ImgWrapper>
              <img
                src={icons[weather]}
                alt="weather code"
                height="70px"
                width="70px"
              />
            </ImgWrapper>
          </Top>
          <Bottom>
            <Temp>
              {data.current.temperature_2m}
              {data.current_units.temperature_2m}
            </Temp>
            <Details>
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
            </Details>
          </Bottom>
        </CardWrapper>
      </Wrapper>
      <TemperatureChart weatherData={data} />
    </Body>
  );
}

const Body = styled.body`
  background-color: #fff;
  color: #000;
  height: 100vh;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const CardWrapper = styled.div`
  background-color: #ffffff20;
  width: 40%;
  display: flex;
  flex-direction: column;
  border: 1px solid #000;
  box-shadow: -3px 3px 7px 0px #000;
  border-radius: 5px;
  padding: 10px;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TopHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImgWrapper = styled.div`
  display: flex;
`;

const StyledHeading = styled.h1`
  text-decoration: underline;
`;

const City = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0;
`;

const Temp = styled.p`
  font-size: 1.6rem;
  font-weight: 600;
  margin: 0;
`;

const Details = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-end;
  margin: 0px;
`;

const DetailsLabel = styled.label`
  margin-right: 10px;
`;

const DetailsValue = styled.p`
  font-weight: 500;
`;

const Desc = styled.p`
  font-size: 12px;
`;

const Bottom = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 15px;
`;

const DetailsWrapper = styled.div`
  display: flex;
`;


