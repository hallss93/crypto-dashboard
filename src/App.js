import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, CssBaseline, Grid } from '@mui/material';
import CryptoCard from './components/CryptoCard';
import CryptoChart from './components/CryptoChart';
import { connectToBinance } from './utils/api';
import { setPrices } from './redux/actions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    connectToBinance(dispatch, setPrices);
  }, [dispatch]);

  return (
    <div className="app">
      <CssBaseline />
      <Container maxWidth="lg">
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={6} md={3}>
            <CryptoCard crypto="BTC" />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <CryptoCard crypto="ETH" />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <CryptoCard crypto="SOL" />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <CryptoCard crypto="DOGE" />
          </Grid>
          <Grid item xs={12}>
            <CryptoChart crypto="BTC" />
          </Grid>
          <Grid item xs={12}>
            <CryptoChart crypto="ETH" />
          </Grid>
          <Grid item xs={12}>
            <CryptoChart crypto="SOL" />
          </Grid>
          <Grid item xs={12}>
            <CryptoChart crypto="DOGE" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default App;
