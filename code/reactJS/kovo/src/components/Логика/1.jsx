import React from 'react';
import './logic.css';

import Instructions from "./Instructions";
import Principles from "./Principles";
import Steps from "./Steps";
import Triz40 from "./Triz40";

const App = () => {
  return (
    <div className="app-container">
      <div className="column">
        <Triz40 />
      </div>
      <div className="column">
        <Principles />
      </div>
      <div className="column">
        <Instructions />
      </div>
      <div className="column">
        <Steps />
      </div>
    </div>
  );
};

export default App;
