import React from 'react';
const StockPrice = ({ stock, onGoBack }) => {
  return (
    <div>
      <h1>{stock.stockName} - {stock.code}</h1>
      <p>Current Price: ${stock.price}</p>
      <button onClick={onGoBack}>Go Back to Stock Menu</button>
    </div>
  );
};
export default StockPrice;
