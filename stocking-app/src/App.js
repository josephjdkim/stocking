import React from 'react';
import StockingHeader from './components/StockingHeader.js'
import StockInfo from './components/StockInfo.js'
import Watchlist from './components/Watchlist.js'
import './App.css';
import StockDataContextProvider from './contexts/StockDataContext.js';

function App() {
  return (
    <div className="App">
      <StockDataContextProvider>
        <StockingHeader />
        <StockInfo />
        <Watchlist />
      </StockDataContextProvider>
    </div>
  );
}

export default App;
