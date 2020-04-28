import React, { Component } from 'react';
import StockCard from './StockCard.js'

function Watchlist() {
  return (
    <div className="watchlist">
      <h1>Watchlist</h1>
      <StockCard />
    </div>
  );
}

export default Watchlist;