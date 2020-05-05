import React, { Component } from 'react';

function StockCard(props) {
  return (
    <div className="stockCard">
      <h3>{props.stock['symbol']}</h3>
      <h3>{props.stock['change']}</h3>
    </div>
  );
}

export default StockCard;