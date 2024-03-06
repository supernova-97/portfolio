import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Chart from "chart.js/auto";

export default function TemperatureChart({ weatherData }) {
  const [chart, setChart] = useState(null);
  const times = weatherData.hourly.time;
  const temps = weatherData.hourly.temperature_2m;

  const minTemp = Math.floor(Math.min(...weatherData.hourly.temperature_2m));
  const maxTemp = Math.ceil(Math.max(...weatherData.hourly.temperature_2m));

  useEffect(() => {
    const ctx = document.getElementById("myChart");

    if (chart) {
      chart.destroy();
    }

    const newChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "00",
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
        ],
        datasets: [
          {
            label: "Temperature",
            data: temps,
            borderColor: "#4B527E",
            backgroundColor: "#7C81AD",
            color: "#000",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            ticks: {
              color: "#000",
            },
            min: minTemp - 5,
            max: maxTemp + 5,
            grid: {
              drawOnChartArea: false,
              drawBorder: false,
            },
          },
          x: {
            ticks: {
              color: "#000",
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
        <Canvas id="myChart"></Canvas>
      </TempChart>
    </ChartWrapper>
  );
}

const TempChart = styled.div`
  width: 60%;
  height: 250px;
  display: relative;
  padding: 0;
  box-shadow: 0px 10px 20px 0px #c6c6c6;
  border-radius: 5px;
`;

const ChartWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 25px;
`;

const Canvas = styled.canvas`
  color: white;
  background-color: #ffffff20;
`;
