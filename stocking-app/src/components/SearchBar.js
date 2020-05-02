import React, { Component, useContext } from 'react';
import config from '../config.js';
import { StockDataContext } from '../contexts/StockDataContext'

function SearchBar() {
  const { stockData, setStockData } = useContext(StockDataContext);
  const URL = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=';

  function handleSearch(symbol) {
    let searchQuery = URL + symbol + '&apikey=' + config.apiKey;

    fetch(searchQuery)
      .then((response) => { return response.json(); })
      .then((jsonResponse) => {
        let ts = jsonResponse["Time Series (Daily)"];
        let data = ts[Object.keys(ts)[0]]

        setStockData({
          symbol: jsonResponse['Meta Data']['2. Symbol'],
          open: data['1. open'],
          high: data['2. high'],
          low: data['3. low'],
          close: data['4. close'],
          volume: data['5. volume']
        });
      });
    };
    
  console.log('stockData from within SearchBar', stockData);

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      let symbol = document.getElementById('searchbar').value;
      handleSearch(symbol);
    };
  };

  return (
    <input id="searchbar" placeholder="search a ticker" onKeyDown={handleKeyDown} />
  );
}

export default SearchBar;