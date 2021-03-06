import React, { Component, useState, useContext, useEffect } from 'react';
import StockCard from './StockCard.js'
import { StockDataContext } from '../contexts/StockDataContext'

function Watchlist() {
  const { stockData } = useContext(StockDataContext);
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    checkNewStock();
  }, [stockData]);
  
  function checkNewStock() {
    const isDuplicate = watchlist.find(s => (s.symbol === stockData.symbol))
    if ((!isDuplicate && !(stockData.symbol === 'STOCKING'))) {
      setWatchlist([{
        name: stockData.name,
        symbol: stockData.symbol,
        updated: stockData.updated,
        open: stockData.open,
        high: stockData.high,
        low: stockData.low,
        close: stockData.close,
        volume: stockData.volume,
        change: stockData.change
      }, ...watchlist]);
    };
  };
  
  function setStockTheme(s) {
    return (s.change >= 0) ? 'green' : 'red';
  }

  return (
    <div className="watchlist">
      <h2 className="prompt">Recently Searched Stocks:</h2>
      <div className="stocks">
        {watchlist.map(stock => {
          let theme = setStockTheme(stock);
          return(
            <StockCard stock={stock} theme={theme}/>
            )
          })}
      </div>
    </div>
  );
}

export default Watchlist;