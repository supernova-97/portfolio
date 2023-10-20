import React from "react";
import Clock from "./Clock";
import TemperatureChart from "./TemperatureChart";
import styled from "styled-components";
import ErrorBoundary from "../ErrorBoundary";

export default function Weather({ data, error, isLoading }) {
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (error) {
    return <h2>Oops, we've run into an error: {error.message}</h2>;
  }
  if (!data) {
    return <h2>Could not fetch any data</h2>;
  }

  return (
    <Wrapper>
      <StyledHeading>Get the weather here!</StyledHeading>
      <Clock />
      <CardWrapper>
        <City>{data.timezone}</City>
        <Desc>Sunny</Desc>
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
      <ErrorBoundary>
        <TemperatureChart weatherData={data}/>
      </ErrorBoundary>
      
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardWrapper = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  border: 2px solid #000;
  border-radius: 5px;
  padding: 10px;
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
  margin-top: 30px;
`;

const DetailsWrapper = styled.div`
  display: flex;
`;
