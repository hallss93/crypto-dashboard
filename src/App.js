import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import CryptoCard from "./components/CryptoCard";
import CryptoChart from "./components/CryptoChart";
import { connectToBinance } from "./utils/api";
import { setPrices } from "./redux/actions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    connectToBinance(dispatch, setPrices);
  }, [dispatch]);

  return (
    <div className="app">
      <div className="crypto-cards">
        <CryptoCard crypto="BTC" />
        <CryptoCard crypto="ETH" />
        <CryptoCard crypto="SOL" />
        <CryptoCard crypto="DOGE" />
      </div>
      <div className="crypto-charts">
        <CryptoChart crypto="BTC" />
        <CryptoChart crypto="ETH" />
        <CryptoChart crypto="SOL" />
        <CryptoChart crypto="DOGE" />
      </div>
    </div>
  );
};

export default App;
