import React, { Component, useContext } from 'react';
import { StockDataContext } from '../contexts/StockDataContext'

function StockInfo() {
  const {stockData} = useContext(StockDataContext);
  return (
    <div className="stockInfo">
      <h3>{stockData.symbol}</h3>
      <h3>COMPANY NAME GOES HERE</h3>
      <h3>Volume: {stockData.volume}</h3>
      <h3>High: {stockData.high}</h3>
      <h3>Low: {stockData.low}</h3>
      <h3>Open: {stockData.open}</h3>
      <h3>Close: {stockData.close}</h3>

    </div>
  );
}

export default StockInfo;