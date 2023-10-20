import React from "react";
import useSWR from "swr";
import Homepage from "./components/Homepage";
import Weather from "./components/Weather-App";
import "./styles/calculator.css";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App(){

    const { data, error, isLoading } = useSWR(
        "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,apparent_temperature,is_day,rain,snowfall,cloudcover,windspeed_10m,winddirection_10m&hourly=temperature_2m,rain&timezone=Europe%2FBerlin&forecast_days=3",
        fetcher
      );

    return (
        <>
         <Homepage />
         <Weather data={data} error={error} isLoading={isLoading}/>
        </>
    )
}