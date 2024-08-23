import React, { useState } from 'react';
import Compounds from './Compounds';
import Elements from './Elements';


export default function X1mi9Page() {
	const [activeTab, setActiveTab] = useState(0);

  const tabNames = ['Соединения', 'Элементы'];
  const tabContents = [<Compounds />, <Elements />];

  return (
    <div>
      <h1>X1mi9Page</h1>
		<div className="tabs">
			<div className="tab-titles">
			{tabNames.map((name, index) => (
				<button key={index} className={`tab-title ${index === activeTab ? 'active' : ''}`} onClick={() => setActiveTab(index)} > {name} </button>
			))}
			</div>
			<div className="tab-content">
				{tabContents[activeTab]}
			</div>
		</div>
    </div>
  );
}
