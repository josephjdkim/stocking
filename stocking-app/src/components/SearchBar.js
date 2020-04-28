import React, { Component } from 'react';

function SearchBar() {
  const URL = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=';
  var symbol = 'AAPL';
  
  // https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=demo
  return (
    <h1>SearchBar</h1>
  );
}

export default SearchBar;