import React, { useEffect, useState } from 'react';
import YAML from 'js-yaml';
import Color from './color';
import './colorsList.css';


const ColorsList = () => {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    // Загружаем YAML-файл из директории public
    fetch('/colors.yaml')
      .then(response => response.text())
      .then(text => {
        // Парсим YAML в объект JavaScript
        const data = YAML.load(text);

        // Преобразуем данные в объекты Color
        const colorObjects = data.map(
          (colorData) =>
            new Color(
              colorData.number,
              colorData.nameReal,
              colorData.nameCurrent,
              colorData.r,
              colorData.g,
              colorData.b,
              colorData.a
            )
        );
        setColors(colorObjects);
      })
      .catch(error => console.error('Error loading YAML file:', error));
  }, []);

  return (
    <div>
      <h1>Color Table</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Number</th>
            <th>Name (Real)</th>
            <th>Name (Current)</th>
            <th>Color Preview</th>
            <th>RGBA</th>
            <th>HEX</th>
            <th>HSL</th>
          </tr>
        </thead>
        <tbody>
          {colors.map((color, index) => (
            <tr key={index}>
              <td>{color.number}</td>
              <td>{color.nameReal}</td>
              <td>{color.nameCurrent}</td>
              <td>
                <div
                  className="color-preview"
                  style={{
                    backgroundColor: color.getRgba(),
                    width: '50px',
                    height: '50px',
                    border: '1px solid #000'
                  }}
                ></div>
              </td>
              <td>{color.getRgba()}</td>
              <td>{color.getHex()}</td>
              <td>{color.getHsl()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ColorsList;
