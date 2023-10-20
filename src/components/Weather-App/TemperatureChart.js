import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";

export default function TemperatureChart({ weatherData }) {
  const [chart, setChart] = useState(null);
  const times = weatherData.hourly.time;
  const temps = weatherData.hourly.temperature_2m;

  useEffect(() => {
    const ctx = document.getElementById("myChart");

    if (chart) {
      chart.destroy();
    }

    const newChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: times,
        datasets: [
          {
            label: "Temperature",
            data: temps,
          },
        ],
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
    <div>
      <canvas id="myChart"></canvas>
    </div>
  );
}
