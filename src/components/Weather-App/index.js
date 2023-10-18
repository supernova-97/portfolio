import React from "react";
import useSWR from "swr";
import Clock from "./Clock";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Weather(){

    

const { data, error, isLoading } = useSWR("https://api.open-meteo.com/v1/forecast?latitude=52.5244&longitude=13.4105&current=relativehumidity_2m,apparent_temperature,is_day,rain,snowfall,cloudcover&hourly=temperature_2m,rain,weathercode,cloudcover&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=Europe%2FBerlin", fetcher);

if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Oops, we've run into an error: {error.message}</h2>;
  }

  if (!data) {
    return <h2>Could not fetch any data</h2>;
  }

console.log(data);
    return (
        <>
         <h1>Get the weather here!</h1>
         <p>Time:</p> 
         <Clock />
         <p>Temperature:</p> 
         <p>{data.current.apparent_temperature}{data.current_units.apparent_temperature}</p>
         <p>Cloudcover:</p> 
         <p>{data.current.cloudcover}{data.current_units.cloudcover}</p>
         <p>Rain:</p> 
         <p>{data.current.rain}{data.current_units.rain}</p>
        </>
    )
}