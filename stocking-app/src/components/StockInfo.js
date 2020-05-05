import React, { Component, useContext, useEffect } from 'react';
import { StockDataContext } from '../contexts/StockDataContext'

function StockInfo() {
  const {stockData} = useContext(StockDataContext);
  const datumKeys = [['volume', 'Volume'], ['open', 'Open'], ['high', 'High'], ['open', 'Open']];

  useEffect(() => {
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
        <div className="stockInfoTop-left">{stockData.name}</div>
        <div className="stockInfoTop-left">{stockData.symbol}</div>
        <div className="stockInfoTop-right">${stockData.close}</div>
        <div className="stockInfoTop-right">{stockData.change}%</div>
      </div>
      <div id="stockDataBank">
      {datumKeys.map(pair => {
        return (
          <div className="stockDatum">
            <p className="datumLabel">{pair[1]}:</p>
            <p className="datumValue">{stockData[pair[0]]}</p>
          </div>
        )
      })}
      </div>
    </div>
  );
}

export default StockInfo;