import React, { useState, useEffect } from 'react';
import HomeMenu from './HomeMenu';
import StockMenu from './StockMenu';
import StockPrice from './StockPrice';
import stockData from './stockData.json'; // Assuming your JSON file is named stockData.json
const ChatBot = () => {
  const [currentMenu, setCurrentMenu] = useState('home');
  const [selectedExchange, setSelectedExchange] = useState(null);
  const [selectedStock, setSelectedStock] = useState(null);
  const [stocks, setStocks] = useState([]);
useEffect(() => {
    if (selectedExchange) {
      const exchangeData = stockData.find(exchange => exchange.code === selectedExchange);
      if (exchangeData) {
        setStocks(exchangeData.topStocks);
      }
    }
  }, [selectedExchange]);
const handleSelectExchange = (exchange) => {
    setSelectedExchange(exchange);
    setCurrentMenu('stockMenu');
  };
const handleSelectStock = (stock) => {
    setSelectedStock(stock);
    setCurrentMenu('stockPrice');
  };
const handleGoHome = () => {
    setCurrentMenu('home');
    setSelectedExchange(null);
    setSelectedStock(null);
  };
const handleGoBack = () => {
    setCurrentMenu('stockMenu');
    setSelectedStock(null);
  };
return (
    <div>
      {currentMenu === 'home' && <HomeMenu onSelectExchange={handleSelectExchange} />}
      {currentMenu === 'stockMenu' && (
        <StockMenu
          exchange={selectedExchange}
          stocks={stocks}
          onSelectStock={handleSelectStock}
          onGoHome={handleGoHome}
        />
      )}
      {currentMenu === 'stockPrice' && <StockPrice stock={selectedStock} onGoBack={handleGoBack} />}
    </div>
  );
};
export default ChatBot;
