import React from 'react';
import Калькулятор from './Калькулятор.jsx';
import Проверки from './Проверки.jsx';
import ПорядокРабот from './ПорядокРабот.jsx';
import './App.css'; // Импорт стилей для сетки

function App() {
  return (
    <div className="app-container">
      <div className="left-panel">
        <Калькулятор />
      </div>
      <div className="right-panel">
        <Проверки />
      </div>
      <div className="center-panel">
        <ПорядокРабот />
      </div>
    </div>
  );
}

export default App;
