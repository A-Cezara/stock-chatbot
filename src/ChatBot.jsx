import React, { useState, useEffect } from "react";
import HomeMenu from "./HomeMenu";
import StockMenu from "./StockMenu";
import StockPrice from "./StockPrice";
import stockData from "./stockData.json";
import './ChatBot.css'; 

const ChatBot = () => {
  const [currentMenu, setCurrentMenu] = useState("home");
  const [selectedExchange, setSelectedExchange] = useState(null);
  const [selectedStock, setSelectedStock] = useState(null);
  const [stocks, setStocks] = useState([]);
  const [menuHistory, setMenuHistory] = useState([]); 

  useEffect(() => {
    if (selectedExchange) {
      const exchangeData = stockData.find(
        (exchange) => exchange.code === selectedExchange
      );
      if (exchangeData) {
        setStocks(exchangeData.topStocks);
      }
    }
  }, [selectedExchange]);

  const handleSelectExchange = (exchange) => {
    setSelectedExchange(exchange);
    setCurrentMenu("stockMenu");
    setMenuHistory([...menuHistory, { type: "home", value: exchange }]);
  };

  const handleSelectStock = (stock) => {
    setSelectedStock(stock);
    setCurrentMenu("stockPrice");
    setMenuHistory([...menuHistory, { type: "stockMenu", value: stock.stockName }]);
  };

  const handleGoHome = () => {
    setCurrentMenu("home");
    setSelectedExchange(null);
    setSelectedStock(null);
    setMenuHistory([]); // Reset history when going back home
  };

  const handleGoBack = () => {
    setCurrentMenu("stockMenu");
    setSelectedStock(null);
    setMenuHistory(menuHistory.slice(0, -1)); // Remove the last item from history
  };

  return (
    <div className="container">
      <div className="chat-box">
        {menuHistory.map((menu, index) => (
          <div key={index} className="bubble user">
            {menu.type === "home" && `Selected Exchange: ${menu.value}`}
            {menu.type === "stockMenu" && `Selected Stock: ${menu.value}`}
          </div>
        ))}
        <div className="bubble">
          {currentMenu === "home" && (
            <HomeMenu onSelectExchange={handleSelectExchange} />
          )}
          {currentMenu === "stockMenu" && (
            <StockMenu
              exchange={selectedExchange}
              stocks={stocks}
              onSelectStock={handleSelectStock}
              onGoHome={handleGoHome}
            />
          )}
          {currentMenu === "stockPrice" && (
            <StockPrice stock={selectedStock} onGoBack={handleGoBack} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatBot;