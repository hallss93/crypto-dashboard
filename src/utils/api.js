var { w3cwebsocket } = require("websocket");

let reconnectAttempts = 0;
const maxReconnectAttempts = 5;

const ws = new w3cwebsocket("wss://stream.binance.com:9443/ws/!ticker@arr");

export const connectToBinance = (dispatch, setPrices) => {
  ws.onerror = (error) => {
    console.error("Error connecting to Binance WebSocket:", error);
    if (reconnectAttempts < maxReconnectAttempts) {
      reconnectAttempts++;
      const delay = Math.pow(2, reconnectAttempts) * 1000; // Backoff exponencial
      console.log(
        `Attempting to reconnect in ${delay} milliseconds (attempt ${reconnectAttempts}/${maxReconnectAttempts})`
      );
      setTimeout(connectToBinance, delay); // Tentar reconectar após atraso
    } else {
      console.error("Exceeded maximum reconnection attempts. Aborting.");
    }
  };

  ws.onmessage = (event) => {
    console.log("Connected to Binance WebSocket");
    reconnectAttempts = 0; // Resetar o contador de tentativas após conexão bem-sucedida

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
