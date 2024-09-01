import React from 'react';


const StockMenu = ({ exchange, stocks, onSelectStock, onGoHome }) => {
  return (
    <div>
      <h1>Select a Stock in {exchange}</h1>
      {stocks.map(stock => (
        <button key={stock.code} onClick={() => onSelectStock(stock)}>
          {stock.stockName}
        </button>
      ))}
      <button onClick={onGoHome}>Go to Home Menu</button>
    </div>
  );
};
export default StockMenu;
