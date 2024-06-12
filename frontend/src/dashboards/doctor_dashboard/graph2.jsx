import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { alignProperty } from '@mui/material/styles/cssUtils';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      align: 'end', // Move legend to the right
      labels: {
        usePointStyle: true,
        boxWidth: 8,
        padding: 10,
        font: {
          size: 14,
        },
      },
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: '#9CA3AF', // Light gray color
        font: {
          size: 12,
        },
      },
    },
    y: {
      grid: {
        color: '#E5E7EB', // Lighter gray color for the grid lines
      },
      ticks: {
        color: '#9CA3AF', // Light gray color
        font: {
          size: 12,
        },
        beginAtZero: true,
      },
    },
  },
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

const data = {
  labels,
  datasets: [
    {
      label: 'New',
      data: [20, 25, 10, 15, 20, 25, 30],
      borderColor: '#F87171', // Red color
      backgroundColor: 'red',
      fill: true,
      tension: 0.4, // Smoother lines
    },
    {
      label: 'Old',
      data: [30, 35, 20, 25, 30, 35, 40],
      borderColor: '#1E3A8A', // Blue color
      backgroundColor: 'blue', // Light blue color
      fill: true,
      tension: 0.4, // Smoother lines
    },
  ],
};

function VisitsChart() {
  return (
    <div style={{position:"relative",width: '322px', height: 'fit-content', padding: '20px', backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <div style={{height:"0", fontSize: '20px', fontWeight: 'bold', color: '#7A7A7A' ,position:"absolute",left:"19px",top:"25px"}}>Visits</div>
        </div>
      <Line options={options} data={data} />
    </div>
  );
}

export default VisitsChart;