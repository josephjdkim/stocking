import React, { Component, useContext, useEffect } from 'react';
import { StockDataContext } from '../contexts/StockDataContext'

function StockInfo() {
  const {stockData} = useContext(StockDataContext);

  useEffect(() => {
    console.log('useEffect from within StockInfo. Symbol from data:', stockData['symbol']);
    handleDefault();
    setTheme();
    
  }, [stockData]);

  function handleDefault() {
    if (stockData['symbol'] === 'STOCKING') {
      document.getElementById('stockInfo').style.display = 'none';
    } else {
      document.getElementById('stockInfo').style.display = 'block'
    };
  }

  function setTheme() {
    if (stockData['change'] >= 0) {
      document.getElementById('stockInfo').className = 'green-stockInfo';
    } else {
      document.getElementById('stockInfo').className = 'red-stockInfo';
    }
  }

  return (
    <div id="stockInfo">
      <h3>{stockData.name}</h3>
      <h3>{stockData.symbol}</h3>
      <h3>Change: {stockData.change}%</h3>
      <h3>Volume: {stockData.volume}</h3>
      <h3>High: {stockData.high}</h3>
      <h3>Low: {stockData.low}</h3>
      <h3>Open: {stockData.open}</h3>
      <h3>Close: {stockData.close}</h3>
    </div>
  );
}

export default StockInfo;