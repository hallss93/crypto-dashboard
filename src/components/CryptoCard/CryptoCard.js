import React from "react";
import { useSelector } from "react-redux";
import { Card, CardContent, Typography } from "@mui/material";
import "./CryptoCard.css";

const CryptoCard = ({ crypto }) => {
  const prices = useSelector((state) => state.prices);
  const initialPrices = useSelector((state) => state.initialPrices);

  const currentPrice = prices[crypto];
  const initialPrice = initialPrices[crypto];
  const percentageChange = ((currentPrice - initialPrice) / initialPrice) * 100;

  return (
    <Card className="crypto-card">
      <CardContent>
        <Typography variant="h5" component="div" color="var(--primary-color)">
          {crypto}
        </Typography>
        <Typography variant="body2">
          Last Price: ${currentPrice?.toFixed(2)}
        </Typography>
        <Typography variant="body2">
          Change: {percentageChange?.toFixed(2)}%
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CryptoCard;
