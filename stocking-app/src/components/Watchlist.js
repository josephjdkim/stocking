import React, { Component, useState, useContext } from 'react';
import StockCard from './StockCard.js'
import { StockDataContext } from '../contexts/StockDataContext'

function Watchlist() {
  const { stockData, setStockData } = useContext(StockDataContext);
  const [watchlist, setWatchlist] = useState([]);
  return (
    <div className="watchlist">
      <h2>Recently Searched Stocks:</h2>
      {watchlist.map(stock => {
        return(
          <StockCard></StockCard>
        )
      })}
    </div>
  );
}

export default Watchlist;