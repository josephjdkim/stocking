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
        console.log(jsonResponse);
        document.getElementById('search').className = 'valid-stock';
        let ts = jsonResponse["Time Series (Daily)"];
        let data = ts[Object.keys(ts)[0]];

        setStockData({
          symbol: symbol,
          open:  Number(Number(data['1. open']).toFixed(2)).toLocaleString(),
          high: Number(Number(data['2. high']).toFixed(2)).toLocaleString(),
          low:  Number(Number(data['3. low']).toFixed(2)).toLocaleString(),
          close: Number(Number(data['4. close']).toFixed(2)).toLocaleString(),
          volume: data['5. volume'].toLocaleString()
        });
      })
      .catch(err => {
        console.log(err)
        document.getElementById('search').className = 'invalid-stock';
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
    <div id="search">
      <input id="searchbar" placeholder="search a ticker" onKeyDown={handleKeyDown} />
    </div>
  );
}

export default SearchBar;