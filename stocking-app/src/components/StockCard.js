import React, { Component } from 'react';

function StockCard(props) {
  return (
    <div className="stockCard">
      <h3>{props.stock['symbol']}</h3>
    </div>
  );
}

export default StockCard;