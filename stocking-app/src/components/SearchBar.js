import React, { Component, useContext } from 'react';
import config from '../config.js';
import { StockDataContext } from '../contexts/StockDataContext'

function SearchBar() {
  const { stockData, setStockData } = useContext(StockDataContext);
  const COMPANY_API = 'https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=';
  const STOCK_API = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=';

  function handleSearch(symbol) {
    // let stockQuery = STOCK_API + symbol + '&apikey=' + config.apiKey;
    // let companyQuery = COMPANY_API + symbol + '&apikey=' + config.apiKey;

    // temporary public-facing api key for GitHub Pages demo
    let stockQuery = STOCK_API + symbol + '&apikey=99B0OWHKU6GXNX6A';
    let companyQuery = COMPANY_API + symbol + '&apikey=99B0OWHKU6GXNX6A';

    let companyName;

    fetch(companyQuery)
      .then((companyResponse) => { return companyResponse.json(); })
      .then((companyJSON) => {
        companyName = companyJSON.bestMatches[0]["2. name"];
        return fetch(stockQuery);
      })
      .then((response) => { return response.json(); })
      .then((jsonResponse) => {
        console.log(jsonResponse)
        let ts = jsonResponse["Time Series (Daily)"];
        let data = ts[Object.keys(ts)[0]];
        let updated = jsonResponse["Meta Data"]["3. Last Refreshed"];

        let open = Number(Number(data['1. open']).toFixed(2));
        let close = Number(Number(data['4. close']).toFixed(2));
        let high = Number(Number(data['2. high']).toFixed(2));
        let low = Number(Number(data['3. low']).toFixed(2));
        let volume = Number(data['5. volume']);

        setStockData({
          name: companyName,
          symbol: symbol.toUpperCase(),
          updated: updated,
          open:  open,
          high: high,
          low:  low,
          close: close,
          change: Number(Number(((Number(close) - Number(open)) / Number(open)) * 100).toFixed(2)),
          volume: volume
        });
        // console.log(Number(open.replace(',','')))
      })
      .catch(err => {
        console.log('Encountered an error:', err)
      });
    };
  
  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      let symbol = document.getElementById('searchbar').value;
      handleSearch(symbol);
      document.getElementById('searchbar').value = '';
    };
  };

  return (
    <div id="search">
      <input id="searchbar" placeholder="search a ticker" onKeyDown={handleKeyDown} />
    </div>
  );
}

export default SearchBar;