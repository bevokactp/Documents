import React, { useState } from 'react';
import {
  calculateHarmonicSeries,
  calculateGeometricSequence,
  calculatePrimeNumbers,
  calculateTaylorSeries,
  calculateYaviSeries,
  calculateNaviSeries,
  calculatePraviSeries,
  calculateSlaviSeries,
} from './series';
import './series.css';

const Series = () => {
  const [seriesType, setSeriesType] = useState('harmonic');
  const [params, setParams] = useState({ n: 10, a: 1, d: 1, r: 1, repeat: 1, customSequence: '' });
  const [result, setResult] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setParams(prevParams => ({ ...prevParams, [name]: value }));
  };

  const handleCalculate = () => {
    let seriesResult;
    switch (seriesType) {
      case 'harmonic':
        seriesResult = calculateHarmonicSeries(params.n);
        break;
      case 'yavi':
        seriesResult = calculateYaviSeries(params.n);
        break;
      case 'geometric':
        seriesResult = calculateGeometricSequence(params.a, params.r, params.n);
        break;
      case 'navi':
        seriesResult = calculateNaviSeries(params.a, params.d, params.n);
        break;
      case 'prime':
        seriesResult = calculatePrimeNumbers(params.n);
        break;
      case 'taylor':
        seriesResult = calculateTaylorSeries(params.n);
        break;
      case 'slavi':
        seriesResult = calculatePraviSeries(params.a, params.repeat);
        break;
      case 'pravi':
        seriesResult = calculateSlaviSeries(params.customSequence.split(',').map(Number), params.repeat);
        break;
      default:
        seriesResult = [];
    }
    setResult(seriesResult);
  };

  return (
    <div className="series-container">
      <h1>Number Series Calculator</h1>
      <select value={seriesType} onChange={(e) => setSeriesType(e.target.value)}>
        <option value="harmonic">Harmonic Series</option>
        <option value="yavi">Ряд Яви</option>
        <option value="geometric">Geometric Sequence</option>
        <option value="navi">Ряд Нави</option>
        <option value="prime">Prime Numbers</option>
        <option value="taylor">Taylor Series</option>
        <option value="slavi">Ряд Слави</option>
        <option value="pravi">Ряд Прави</option>
      </select>
      <div className="input-fields">
        <input
          type="number"
          name="n"
          value={params.n}
          onChange={handleChange}
          placeholder="Number of terms"
        />
        {seriesType === 'geometric' && (
          <>
            <input
              type="number"
              name="a"
              value={params.a}
              onChange={handleChange}
              placeholder="Initial term"
            />
            <input
              type="number"
              name="r"
              value={params.r}
              onChange={handleChange}
              placeholder="Common ratio"
            />
          </>
        )}
        {seriesType === 'navi' && (
          <>
            <input
              type="number"
              name="a"
              value={params.a}
              onChange={handleChange}
              placeholder="Initial term"
            />
            <input
              type="number"
              name="d"
              value={params.d}
              onChange={handleChange}
              placeholder="Common difference"
            />
          </>
        )}
        {seriesType === 'slavi' && (
          <>
            <input
              type="number"
              name="a"
              value={params.a}
              onChange={handleChange}
              placeholder="Number to repeat"
            />
            <input
              type="number"
              name="repeat"
              value={params.repeat}
              onChange={handleChange}
              placeholder="Number of repetitions"
            />
          </>
        )}
        {seriesType === 'pravi' && (
          <>
            <input
              type="text"
              name="customSequence"
              value={params.customSequence}
              onChange={handleChange}
              placeholder="Custom sequence (comma separated)"
            />
            <input
              type="number"
              name="repeat"
              value={params.repeat}
              onChange={handleChange}
              placeholder="Number of repetitions"
            />
          </>
        )}
      </div>
      <button onClick={handleCalculate}>Calculate</button>
      <div className="results">
        <h2>Results:</h2>
        <ul>
          {result.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Series;
