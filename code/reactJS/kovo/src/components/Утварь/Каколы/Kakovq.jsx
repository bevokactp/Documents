import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import yaml from 'js-yaml';
import './kakovq.css'; // Предполагается, что стили определены в этом файле


каколо
баколо
даколо
маколо
филиповка
ведучка
берегиня северная
доля
филиповка
колокольчик
кони солнечные

const Kakovq = () => {
  const [dolls, setDolls] = useState([]);

  useEffect(() => {
    // Функция для загрузки и разбора YAML файла
    const loadYAML = async () => {
      try {
        // Загрузка YAML файла
        const response = await fetch('./kakovq.yaml'); // Укажите путь к вашему YAML файлу
        const yamlText = await response.text();
        const data = yaml.load(yamlText);
        setDolls(data.dolls);
      } catch (error) {
        console.error('Error loading or parsing YAML file:', error);
      }
    };

    loadYAML();
  }, []);

  return (
    <div className="doll-container">
      {dolls.map((doll, index) => (
        <div key={index} className="doll-card">
          <h2>{doll.title}</h2>
          {doll.photo && <img src={doll.photo} alt={doll.title} className="doll-photo" />}
          <p><strong>Purpose:</strong> {doll.purpose}</p>
          <p><strong>Description:</strong> {doll.description}</p>
          <p><strong>Materials:</strong> {doll.materials.join(', ')}</p>
          <p><strong>Creation Order:</strong> {doll.creationOrder}</p>
        </div>
      ))}
    </div>
  );
};

Kakovq.propTypes = {
  dolls: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      purpose: PropTypes.string.isRequired,
      photo: PropTypes.string,
      materials: PropTypes.arrayOf(PropTypes.string).isRequired,
      creationOrder: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Kakovq;
