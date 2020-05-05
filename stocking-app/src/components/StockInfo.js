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
      document.getElementById('stockInfoTop').className = 'green-stockInfoTop';
    } else {
      document.getElementById('stockInfo').className = 'red-stockInfo';
      document.getElementById('stockInfoTop').className = 'red-stockInfoTop';
    }
  }

  return (
    <div id="stockInfo">
      <div id="stockInfoTop">
        <h3 className="stockInfoTop-left">{stockData.name}</h3>
        <h3 className="stockInfoTop-left">{stockData.symbol}</h3>
        <h3 className="stockInfoTop-right">${stockData.close}</h3>
        <h3 className="stockInfoTop-right">{stockData.change}%</h3>
      </div>
      <div id="stockInfoBottom">
        <h3 className="stockInfoBottom-left">Volume: {stockData.volume}</h3>
        <h3 className="stockInfoBottom-left">High: {stockData.high}</h3>
        <h3 className="stockInfoBottom-left">Low: {stockData.low}</h3>
        <h3 className="stockInfoBottom-left">Open: {stockData.open}</h3>
      </div>
    </div>
  );
}

export default StockInfo;