import React, { Component, useContext } from 'react';
import config from '../config.js';
import { StockDataContext } from '../contexts/StockDataContext'

function SearchBar() {
  const { stockData, setStockData } = useContext(StockDataContext);
  const COMPANY_API = 'https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=';
  const STOCK_API = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=';

  function handleSearch(symbol) {
    let stockQuery = STOCK_API + symbol + '&apikey=' + config.apiKey;
    let companyQuery = COMPANY_API + symbol + '&apikey=' + config.apiKey;
    let companyName;

    fetch(companyQuery)
      .then((companyResponse) => { return companyResponse.json(); })
      .then((companyJSON) => {
        companyName = companyJSON.bestMatches[0]["2. name"];
        console.log('NAME', companyName);
        return fetch(stockQuery);
      })
      .then((response) => { return response.json(); })
      .then((jsonResponse) => {
        console.log(jsonResponse);
        document.getElementById('search').className = 'valid-stock';
        let ts = jsonResponse["Time Series (Daily)"];
        let data = ts[Object.keys(ts)[0]];

        let open = Number(Number(data['1. open']).toFixed(2)).toLocaleString();
        let close = Number(Number(data['4. close']).toFixed(2)).toLocaleString();

        setStockData({
          name: companyName,
          symbol: symbol.toUpperCase(),
          open:  open,
          high: Number(Number(data['2. high']).toFixed(2)).toLocaleString(),
          low:  Number(Number(data['3. low']).toFixed(2)).toLocaleString(),
          close: close,
          change: Number(Number((((close - open) / open) * 100)).toFixed(2)).toLocaleString(),
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