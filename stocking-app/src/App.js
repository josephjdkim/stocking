import React from 'react';
import StockingHeader from './components/StockingHeader.js'
import StockInfo from './components/StockInfo.js'
import Watchlist from './components/Watchlist.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <StockingHeader />
      <StockInfo />
      <Watchlist />
    </div>
  );
}

export default App;
