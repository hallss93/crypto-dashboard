var { w3cwebsocket } = require("websocket");

const ws = new w3cwebsocket("wss://stream.binance.com:9443/ws/!ticker@arr");

export const connectToBinance = (dispatch, setPrices) => {
  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    const prices = data.reduce((acc, ticker) => {
      switch (ticker.s) {
        case "BTCUSDT":
          acc.BTC = parseFloat(ticker.c);
          break;
        case "ETHUSDT":
          acc.ETH = parseFloat(ticker.c);
          break;
        case "SOLUSDT":
          acc.SOL = parseFloat(ticker.c);
          break;
        case "DOGEUSDT":
          acc.DOGE = parseFloat(ticker.c);
          break;
        default:
          break;
      }
      return acc;
    }, {});
    dispatch(setPrices(prices));
  };

  ws.onclose = () => {
    setTimeout(() => connectToBinance(dispatch, setPrices), 1000);
  };
};
