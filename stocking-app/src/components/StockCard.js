import React, { Component } from 'react';

function StockCard(props) {
  const className = "stockCard " + props.theme + "-stockCard";
  return (
    <div className={className}>
      <h3>{props.stock['symbol']}</h3>
      <h3>{props.stock['change']}</h3>
    </div>
  );
}

export default StockCard;