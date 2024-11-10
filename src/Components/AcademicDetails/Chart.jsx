import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the necessary components
ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = ({ attendedClasses, totalClasses }) => {
  const data = {
    datasets: [
      {
        data: [attendedClasses, totalClasses - attendedClasses],
        backgroundColor: ['#69D27D', '#F0F0F0'],
        hoverBackgroundColor: ['#69D27D', '#F0F0F0'],
      },
    ],
  };

  const options = {
    cutout: '70%',
    plugins: {
      tooltip: {
        enabled: true,
      },
      legend: {
        display: true,
        position: 'bottom',
      },
    },
    maintainAspectRatio: false,
    devicePixelRatio: 2, // Increase the resolution
  };

  return (
    <div className="relative w-64 h-64">
      <Doughnut data={data} options={options} />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-2xl font-bold text-gray-600">{`${attendedClasses}/${totalClasses}`}</span>
      </div>
    </div>
  );
};

export default Chart;