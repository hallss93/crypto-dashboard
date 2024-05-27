import React from "react";
import { useSelector } from "react-redux";

const CryptoCard = ({ crypto }) => {
  const prices = useSelector((state) => state.prices);
  const initialPrices = useSelector((state) => state.initialPrices);

  const currentPrice = prices[crypto];
  const initialPrice = initialPrices[crypto];
  const percentageChange = ((currentPrice - initialPrice) / initialPrice) * 100;

  return (
    <div className="crypto-card">
      <h2>{crypto}</h2>
      <p>Last Price: ${currentPrice.toFixed(2)}</p>
      <p>Change: {percentageChange.toFixed(2)}%</p>
    </div>
  );
};

export default CryptoCard;
