import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
} from "chart.js";
import { useSelector } from "react-redux";

ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale);

const CryptoChart = ({ crypto }) => {
  const prices = useSelector((state) => state.prices);
  const initialPrices = useSelector((state) => state.initialPrices);
  const [priceHistory, setPriceHistory] = React.useState([]);

  React.useEffect(() => {
    if (prices[crypto] && initialPrices[crypto]) {
      setPriceHistory((prevHistory) => [
        ...prevHistory,
        { time: new Date().toLocaleTimeString(), price: prices[crypto] },
      ]);
    }
  }, [prices, crypto, initialPrices]);

  const data = {
    labels: priceHistory.map((entry) => entry.time),
    datasets: [
      {
        label: `${crypto} Price`,
        data: priceHistory.map((entry) => entry.price),
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        type: "category",
        labels: priceHistory.map((entry) => entry.time),
      },
      y: {
        beginAtZero: false,
      },
    },
  };

  return (
    <div className="crypto-chart">
      <h2>{crypto} Price Chart</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default CryptoChart;
