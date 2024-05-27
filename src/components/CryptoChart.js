import React from "react";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { Card, CardContent, Typography } from "@mui/material";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
} from "chart.js";

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
    <Card
      sx={{
        backgroundColor: "var(--secondary-bg)",
        color: "var(--text-color)",
        border: "1px solid var(--border-color)",
        borderRadius: 2,
        marginTop: 2,
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div" color="var(--primary-color)">
          {crypto} Price Chart
        </Typography>
        <Line data={data} options={options} />
      </CardContent>
    </Card>
  );
};

export default CryptoChart;
