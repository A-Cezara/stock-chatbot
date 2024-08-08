import React from 'react';
const HomeMenu = ({ onSelectExchange }) => {
  return (
    <div>
      <h1>Select a Stock Exchange</h1>
      <button onClick={() => onSelectExchange('LSE')}>LSEG</button>
      <button onClick={() => onSelectExchange('NASDAQ')}>NASDAQ</button>
      <button onClick={() => onSelectExchange('NYSE')}>NYSE</button>
    </div>
  );
};
export default HomeMenu;
