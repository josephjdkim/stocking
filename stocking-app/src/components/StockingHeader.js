import React, { Component } from 'react';
import SearchBar from './SearchBar.js'

function StockingHeader() {
  return (
    <header className="header">
      <h1 className="hero">Stocking 〽️👀</h1>
      <SearchBar />
    </header>
  );
}

export default StockingHeader;