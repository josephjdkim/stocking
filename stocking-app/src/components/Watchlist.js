import React, { Component } from 'react';
import StockCard from './StockCard.js'

function Watchlist() {
  return (
    <div className="watchlist">
      <h2>Recently Searched Stocks:</h2>
      <StockCard />
    </div>
  );
}

export default Watchlist;