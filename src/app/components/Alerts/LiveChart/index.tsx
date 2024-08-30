import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  CategoryScale,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { ChartData, ChartOptions } from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, CategoryScale);

interface DataPoint {
  id: number;
  score: number;
  response_text: string;
  timestamp: string;
  is_safe: boolean;
}

function LiveChart() {
  const [data, setData] = useState<DataPoint[]>([]);

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8080');

    socket.onmessage = (event: MessageEvent) => {
      const newDataPoint: DataPoint = JSON.parse(event.data);
      setData((prevData) => [...prevData, newDataPoint].slice(-10));
    };

    return () => {
      socket.close();
    };
  }, []);

  const chartData: ChartData<'line'> = {
    labels: data.map(d => new Date(d.timestamp).toLocaleTimeString()),
    datasets: [
      {
        label: 'Safety Score',
        data: data.map(d => d.score),
        fill: false,
        backgroundColor: data.map(d => d.is_safe ? 'rgb(75, 192, 192)' : 'rgb(255, 99, 132)'),
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    scales: {
      y: {
        beginAtZero: true,
        max: 1,
        title: {
          display: true,
          text: 'Safety Score',
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `Score: ${tooltipItem.raw}`;
          },
          afterLabel: function (tooltipItem) {
            const dataIndex = tooltipItem.dataIndex;
            return `Response: ${data[dataIndex].response_text}`;
          },
        },
      },
    },
  };

  return (
    <div>
      <h2 className='pb-4 pl-2 font-semibold text-xl'>Live Safety Score Chart</h2>
      <Line data={chartData} options={options} />
    </div>
  );
}

export default LiveChart;
