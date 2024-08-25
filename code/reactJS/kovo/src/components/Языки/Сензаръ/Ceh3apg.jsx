import React from 'react';
import './ceh3apg.css';
import { PHONEME_ALPHABET, IDEOGRAM_ALPHABET, LOGOGRAM_ALPHABET } from './ceh3apg.js';

const SymbolBlock = ({ title, alphabet }) => {
  return (
    <div className="symbol-block">
      <h2>{title} (Количество: {alphabet.getCount()})</h2>
      <div className="symbol-list">
        {alphabet.getSymbols().map((symbol, index) => (
          <div key={index} className="symbol-item">
            <div className="symbol-display">{symbol.symbol}</div>
            <div className="symbol-details">{symbol.getDetails()}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <div className="symbol-container">
        <SymbolBlock title="Звуки" alphabet={PHONEME_ALPHABET} />
        <SymbolBlock title="Идеи понятия" alphabet={IDEOGRAM_ALPHABET} />
        <SymbolBlock title="Слова морфемы" alphabet={LOGOGRAM_ALPHABET} />
      </div>
    </div>
  );
};

export default App;
