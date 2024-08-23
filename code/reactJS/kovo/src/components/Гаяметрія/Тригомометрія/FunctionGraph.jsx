import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { TRIGONOMETRIC_FUNCTIONS } from './trigonometricFunctions'; // Импорт всех функций

const FunctionGraph = ({ selectedFunctions }) => {
  const svgRef = useRef(null);
  const [scale, setScale] = useState(1); // Начальный масштаб

  const width = 600;
  const height = 400;
  const margin = { top: 20, right: 30, bottom: 30, left: 40 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const updateGraph = () => {
    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();  // Очистка предыдущего контента

    // Обновление шкал
    const xScale = d3.scaleLinear()
      .domain([0, 360])
      .range([0, innerWidth]);

    const yScale = d3.scaleLinear()
      .domain([-10 / scale, 10 / scale])
      .range([innerHeight, 0]);

    const lineGenerator = d3.line()
      .x(d => xScale(d.x))
      .y(d => yScale(d.y))
      .curve(d3.curveMonotoneX);

    // Добавление осей
    svg.append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`)
      .call(d3.axisLeft(yScale).ticks(10))
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', -margin.left)
      .attr('x', -innerHeight / 2)
      .attr('dy', '0.71em')
      .attr('text-anchor', 'middle')
      .text('Значение');

    svg.append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`)
      .attr('transform', `translate(0,${innerHeight})`)
      .call(d3.axisBottom(xScale).ticks(10))
      .append('text')
      .attr('x', innerWidth / 2)
      .attr('y', margin.bottom)
      .attr('text-anchor', 'middle')
      .text('Градусы');

    // Отображение графиков
    Object.entries(TRIGONOMETRIC_FUNCTIONS)
      .filter(([key]) => selectedFunctions[key])
      .forEach(([key, fn]) => {
        const data = Array.from({ length: 361 }, (_, i) => {
          const x = i * Math.PI / 180;
          let y;

          // Обработка значений для функции
          switch (key) {
            case 'csc':
              y = Math.sin(x) === 0 ? null : fn.func(x);
              break;
            case 'sec':
              y = Math.cos(x) === 0 ? null : fn.func(x);
              break;
            case 'csch':
              y = Math.sinh(x) === 0 ? null : fn.func(x);
              break;
            case 'coth':
              y = Math.sinh(x) === 0 ? null : fn.func(x);
              break;
            case 'arcsec':
              y = Math.abs(x) < 1 ? null : fn.func(x);
              break;
            case 'arccsc':
              y = Math.abs(x) < 1 ? null : fn.func(x);
              break;
            case 'gaverscosC':
              // Обработка значения для gaverscosC
              const cosValue = Math.cos(x);
              y = cosValue > 0 ? fn.func(x) : null;
              break;
            case 'gaversin':
              y = Math.sin(x / 2) > 0 ? fn.func(x) : null;
              break;
            case 'gaversinC':
              y = (1 - Math.sin(x / 2)) > 0 ? fn.func(x) : null;
              break;
            case 'excsc':
              y = Math.sinh(x) === 0 ? null : 1 / Math.sinh(x);
              break;
            default:
              y = fn.func(x);
          }

          return { x: i, y };
        });

        // Удаляем точки с null значением
        const filteredData = data.filter(d => d.y !== null);

        if (filteredData.length > 0) { // Добавляем только если есть данные
          svg.append('path')
            .datum(filteredData)
            .attr('fill', 'none')
            .attr('stroke', fn.color)
            .attr('stroke-width', 2)
            .attr('d', lineGenerator);
        } else {
          console.warn(`No data to display for ${key}`);
        }
      });
  };

  useEffect(() => {
    updateGraph();
  }, [selectedFunctions, scale]);

  const handleZoomIn = () => {
    setScale(prevScale => Math.min(prevScale * 1.2, 10)); // Увеличение масштаба
  };

  const handleZoomOut = () => {
    setScale(prevScale => Math.max(prevScale / 1.2, 0.1)); // Уменьшение масштаба
  };

  return (
    <div>
      <h2>Графики функций</h2>
      <div className="controls">
        <button onClick={handleZoomIn}>+</button>
        <button onClick={handleZoomOut}>-</button>
      </div>
      <svg ref={svgRef} width={width} height={height}></svg>
    </div>
  );
};

export default FunctionGraph;
