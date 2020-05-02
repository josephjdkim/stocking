import React, { Component } from 'react';

function StockCard(props) {
  return (
    <div className="stockCard">
      <h1>{props.stock['symbol']}</h1>
    </div>
  );
}

export default StockCard;