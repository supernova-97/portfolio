import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import useSWR from "swr";
import Homepage from "./components/Homepage";
import Calculator from "./components/Calculator";
import Weather from "./components/Weather-App";
import styled from "styled-components";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App() {
  const { data, error, isLoading } = useSWR(
    "https://api.open-meteo.com/v1/forecast?latitude=52.5244&longitude=13.4105&current=temperature_2m,apparent_temperature,is_day,rain,weathercode,cloudcover,windspeed_10m,winddirection_10m&hourly=temperature_2m,apparent_temperature,weathercode,cloudcover&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&timezone=Europe%2FBerlin&forecast_days=1",
    fetcher
  );

  return (
    <>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/calculator">Calculator</Link>
        <Link to="/weather">Weather Forecast</Link>
      </Nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/weather" element={<Weather data={data} error={error} isLoading={isLoading} />} />
      </Routes>
    </>
  );
}

const Nav = styled.nav`
  display: flex;
  margin: 15px;
  border-bottom: 1px solid black;
`;
