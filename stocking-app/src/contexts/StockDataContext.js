import React, { createContext, useState } from 'react';

export const StockDataContext = createContext();

function StockDataContextProvider(props) {
  const [stockData, setStockData] = useState({
    symbol: 'ABC',
    open: 0,
    high: 0,
    low: 0,
    close: 0,
    volume: 0
  });
  return (
    <StockDataContext.Provider value={{stockData, setStockData}}>
      {props.children}
    </StockDataContext.Provider>
  );
}

export default StockDataContextProvider;