import React, { useState } from 'react';
import data from './triz40.yaml'; // импортируем данные из файла YAML

// Функция для получения списка принципов из данных
const getPrincipleNames = (data) => {
  return Object.values(data).map(principle => principle.name);
};

// Функция для получения информации о принципе по имени
const getPrincipleByName = (data, name) => {
  return Object.values(data).find(principle => principle.name === name);
};

// Компонент для отображения информации о принципе
const PrincipleDetail = ({ principle }) => {
  const { name, description, application, benefits, challenges, examples } = principle;

  const style = {
    application: { color: 'purple' },
    benefits: { color: 'blue' },
    challenges: { color: 'orange' },
    examples: { color: 'green' }
  };

  return (
    <div>
      <p>{description}</p>
      <p style={style.application}><strong>?</strong></p>
      <ul>
        {application.map((app, index) => <li key={index} style={style.application}>{app}</li>)}
      </ul>
      <p style={style.benefits}><strong>+</strong></p>
      <ul>
        {benefits.map((benefit, index) => <li key={index} style={style.benefits}>{benefit}</li>)}
      </ul>
      <p style={style.challenges}><strong>-</strong></p>
      <ul>
        {challenges.map((challenge, index) => <li key={index} style={style.challenges}>{challenge}</li>)}
      </ul>
      <p style={style.examples}><strong>!</strong></p>
      <ul>
        {examples.map((example, index) => <li key={index} style={style.examples}>{example}</li>)}
      </ul>
    </div>
  );
};

// Основной компонент
const Triz40 = () => {
  const [selectedPrinciple, setSelectedPrinciple] = useState(null);

  const handleToggle = (principleName) => {
    setSelectedPrinciple(selectedPrinciple === principleName ? null : principleName);
  };

  return (
    <div>
      <ul>
        {getPrincipleNames(data).map((name) => (
          <li key={name}>
            <button onClick={() => handleToggle(name)}>{name}</button>
            {selectedPrinciple === name && (
              <PrincipleDetail principle={getPrincipleByName(data, name)} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Triz40;
