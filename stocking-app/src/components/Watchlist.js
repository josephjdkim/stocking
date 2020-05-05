import React, { Component, useState, useContext, useEffect } from 'react';
import StockCard from './StockCard.js'
import { StockDataContext } from '../contexts/StockDataContext'

function Watchlist() {
  const { stockData } = useContext(StockDataContext);
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    console.log('useEffect from within Watchlist. Symbol from data:', stockData['symbol']);
    checkNewStock();
    console.log('watchlist from within Watchlist', watchlist)
  }, [stockData]);

  function checkNewStock() {
    console.log('WITHIN checkNewStock()')

    const isDuplicate = watchlist.find(s => (s.symbol === stockData.symbol))
    if ((!isDuplicate && !(stockData['symbol'] === 'STOCKING'))) {
      setWatchlist([...watchlist, {
        symbol: stockData['symbol'],
        open: stockData['open'],
        high: stockData['high'],
        low: stockData['low'],
        close: stockData['close'],
        volume: stockData['volume'],
        change: stockData['change']
      }]);
    };
  };

  return (
    <div className="watchlist">
      <h2 className="prompt">Recently Searched Stocks:</h2>
      <div className="stocks">
        {watchlist.map(stock => {
          return(
            <StockCard stock={stock} />
            )
          })}
      </div>
    </div>
  );
}

export default Watchlist;