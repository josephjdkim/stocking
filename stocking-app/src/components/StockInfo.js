import React, { Component, useContext, useEffect } from 'react';
import { StockDataContext } from '../contexts/StockDataContext'

function StockInfo() {
  const {stockData} = useContext(StockDataContext);
  const datumKeys = [['volume', 'Volume'], ['open', 'Open'], ['high', 'High'], ['open', 'Open']];

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
        <div className="stockInfoTop-left">{stockData.name}</div>
        <div className="stockInfoTop-left">{stockData.symbol}</div>
        <div className="stockInfoTop-right">${stockData.close}</div>
        <div className="stockInfoTop-right">{stockData.change}%</div>
      </div>
      {datumKeys.map(pair => {
        // console.log("INSIDE datumKeys.forEach:", pair[0]);
        return (
          <div className="stockDatum">
            <p className="datumLabel">{pair[1]}:</p>
            <p className="datumValue">{stockData[pair[0]]}</p>
          </div>
        )
      })}

        {/* <div className="stockDatum">Volume: {stockData.volume}</div>
        <div className="stockDatum">High: {stockData.high}</div>
        <div className="stockDatum">Low: {stockData.low}</div>
        <div className="stockDatum">Open: {stockData.open}</div> */}
    </div>
  );
}

export default StockInfo;