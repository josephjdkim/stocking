import React, { Component, useEffect, useState } from 'react';
import config from '../config.js';

function SearchBar() {

  const URL = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=';
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    console.log('useEffect() for SearchBar', stockData);

  }, [stockData]);

  function handleSearch(symbol) {
    let searchQuery = URL + symbol + '&apikey=' + config.apiKey;

    fetch(searchQuery)
      .then((response) => { return response.json(); })
      .then((jsonResponse) => {
        console.log(jsonResponse);
        setStockData(jsonResponse);
      });
  };

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      let symbol = document.getElementById('searchbar').value;
      handleSearch(symbol);
    };
  };

  return (
    <input id="searchbar" onKeyDown={handleKeyDown} />
  );
}

export default SearchBar;