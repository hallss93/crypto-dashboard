import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import CryptoCard from "./components/CryptoCard";
import { connectToBinance } from "./utils/api";
import { setPrices } from "./redux/actions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    connectToBinance(dispatch, setPrices);
  }, [dispatch]);

  return (
    <div className="app">
      <CryptoCard crypto="BTC" />
      <CryptoCard crypto="ETH" />
      <CryptoCard crypto="SOL" />
      <CryptoCard crypto="DOGE" />
    </div>
  );
};

export default App;
