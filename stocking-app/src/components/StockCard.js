import React, { Component, useContext } from 'react';
import { StockDataContext } from '../contexts/StockDataContext'

function StockCard(props) {
  const { setStockData } = useContext(StockDataContext);
  const className = "stockCard " + props.theme + "-stockCard";
  
  function updateStockData() {
    setStockData({
      name: props.stock.name,
      symbol: props.stock.symbol,
      open:  props.stock.open,
      high: props.stock.high,
      low:  props.stock.low,
      close: props.stock.close,
      change: props.stock.change,
      volume: props.stock.volume
    });
  };

  return (
    <div className={className} onClick={updateStockData}>
      <p className="stockCard-name">{props.stock.name}</p>
      <h3 className="stockCard-symbol">{props.stock.symbol}</h3>
      <h3 className="stockCard-change">{props.stock.change}%</h3>
    </div>
  );
}

export default StockCard;