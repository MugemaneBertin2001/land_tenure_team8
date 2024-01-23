"use client" 
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { LandRecord } from './type';
import { Chart, registerables } from 'chart.js';

const mockChartData = [
  { year: 2020, records: 15 },
  { year: 2021, records: 30 },
  { year: 2022, records: 25 },
  
];
Chart.register(...registerables);

interface RecordBarChartProps {
    records: LandRecord[];
  }

  const RecordBarChart: React.FC<RecordBarChartProps> = ({ records }) => {
    const getStatusCounts = () => {
      const counts = { Approved: 0, Pending: 0, Rejected: 0, Unknown: 0 };
  
      records.forEach((record) => {
        switch (record.recordStatus) {
          case 'Approved':
            counts.Approved += 1;
            break;
          case 'Pending':
            counts.Pending += 1;
            break;
          case 'Rejected':
            counts.Rejected += 1;
            break;
          default:
            counts.Unknown += 1;
        }
      });
  
      return Object.values(counts);
    };
  
    const data = {
      labels: mockChartData.map(entry => entry.year.toString()),
      datasets: [
        {
          label: 'Number of Records',
          data: mockChartData.map(entry => entry.records),
          backgroundColor: ['#34D399', '#FBBF24', '#EF4444', '#6B7280'],
        },
      ],
    };
  
    const options = {
      scales: {
        x: {
          type: 'linear',
          position: 'bottom',
          title: {
            display: true,
            text: 'X-axis Label',
          },
          ticks: {
            beginAtZero: true,
            stepSize: 1,
          },
        },
        y: {
          type: 'linear',
          position: 'left',
          title: {
            display: true,
            text: 'Y-axis Label',
          },
          ticks: {
            beginAtZero: true,
            stepSize: 10,
          },
        },
      },
    };
  // @ts-ignore
    return <Bar data={data} options={options} />;
  };

export default RecordBarChart;
