import React from "react";
import styled from "styled-components";
import rain from "../../icons/rain.png";
import raindrop from "../../icons/raindrop.png";
import wind from "../../icons/wind.png";

export default function Test() {
  return (
    <Wrapper>
      <Card>
        <H1>Berlin</H1>
        <H2>partially cloudy</H2>
        <Temp>13°</Temp>
        <Date>Tuesday, Oct. 10, 12:42</Date>
        <InfoWrapper>
          <InfoDetail>
            <img src={rain} height="30" width="30" />
            <p>30%</p>
            <Detail>Rain</Detail>
          </InfoDetail>

          <InfoDetail>
            <img src={wind} height="30" width="30" />
            <p>20 km/s</p>
            <Detail>Wind speed</Detail>
          </InfoDetail>

          <InfoDetail>
            <img src={raindrop} height="30" width="30" />
            <p>20%</p>
            <Detail>Humidity</Detail>
          </InfoDetail>
        </InfoWrapper>
      </Card>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 40px;
`;
const Card = styled.div`
  background-color: #573866;
  height: 65vh;
  width: 225px;
  border-radius: 20px;
  opacity: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const H1 = styled.h1`
margin-top: 5px;
  color: #fff;
  font-size: 0.9rem;
  font-weight: 600;
`;
const H2 = styled.h2`
  color: #fff;
  font-size: 0.8rem;
  font-weight: 200;
`;

const Temp = styled.span`
  margin: 20px;
  color: #fff;
  font-size: 3rem;
  font-weight: 700;
`;

const Date = styled.p`
  color: #fff;
  font-size: 14px;
  font-weight: 500;
`;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 40px 0 0 0;
  border-radius: 25px;
  width: 80%;
  height: 80px;
  background-color: #422453;
`;

const InfoDetail = styled.div`
  color: #fff;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Detail = styled.p`
  font-size: 10px;
`;
