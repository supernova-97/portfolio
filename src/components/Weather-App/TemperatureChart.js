import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Chart from "chart.js/auto";

export default function TemperatureChart({ weatherData }) {
  const [chart, setChart] = useState(null);
  const times = weatherData.hourly.time;
  const temps = weatherData.hourly.temperature_2m;

  const minTemp = Math.floor(Math.min(...weatherData.hourly.temperature_2m));
  const maxTemp = Math.ceil(Math.max(...weatherData.hourly.temperature_2m));
console.log(weatherData)
  useEffect(() => {
    const ctx = document.getElementById("myChart");

    if (chart) {
      chart.destroy();
    }

    const newChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "24:00",
          "01:00",
          "02:00",
          "03:00",
          "04:00",
          "05:00",
          "06:00",
          "07:00",
          "08:00",
          "09:00",
          "10:00",
          "11:00",
          "12:00",
          "13:00",
          "14:00",
          "15:00",
          "16:00",
          "17:00",
          "18:00",
          "19:00",
          "20:00",
          "21:00",
          "22:00",
          "23:00",
        ],
        datasets: [
          {
            label: "Temperature",
            data: temps,
            borderColor: "#4B527E",
            backgroundColor: "#7C81AD",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            min: minTemp - 5,
            max: maxTemp + 5,
            grid: {
              drawOnChartArea: false,
              drawBorder: false,
            },
          },
        },
        layout: {
          autoPadding: true,
        },
      },
    });

    setChart(newChart);

    return () => {
      if (newChart) {
        newChart.destroy();
      }
    };
  }, [times, temps]);

  return (
    <ChartWrapper>
      <TempChart>
        <canvas id="myChart"></canvas>
      </TempChart>
    </ChartWrapper>
  );
}

const TempChart = styled.div`
  width: 60%;
  height: 250px;
  display: relative;
  padding: 10px;
  border: 2px solid black;
  border-radius: 10px;
`;

const ChartWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 25px;
`;
