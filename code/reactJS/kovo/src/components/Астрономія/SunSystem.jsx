// src/components/SunSystem.jsx
import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';

// Размеры канваса
const width = 1000;
const height = 1000;

// Определяем радиус для планет и спутников
const planetRadius = 10;
const moonRadius = 5;

const SunSystem = () => {
    const svgRef = useRef();
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/data/astronomy/objects.json')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    useEffect(() => {
        const svg = d3.select(svgRef.current)
            .attr('width', width)
            .attr('height', height)
            .style('background', '#000')
            .style('border', '1px solid #fff');

        const group = svg.append('g');
        const center = [width / 2, height / 2];

        // Очистка предыдущих отрисовок
        group.selectAll('*').remove();

        if (data.length > 0) {
            const angleOffset = 0; // Начальный угол 90 градусов для первой планеты
            const angleStep = 45; // Шаг в 30 градусов для последующих планет

            // Функция для отрисовки объектов
            function drawObject(obj, index) {
                const angle = index === 0 || index === 3
                    ? -90 // Первая и вторая планеты на одной линии (90 градусов)
                    : (angleOffset + angleStep * (index - 1)) % 360; // Остальные с шагом в 30 градусов

                const distance = (index + 1) * (planetRadius * 4);
                const x = center[0] + distance * Math.cos((angle * Math.PI) / 180);
                const y = center[1] + distance * Math.sin((angle * Math.PI) / 180);

                let radius = planetRadius;
                if (index === 0) {
                    radius *= 2; // Удваиваем радиус для первой планеты
                }

                if (obj.exists) {
                    // Отображение планеты
                    group.append('circle')
                        .attr('cx', x)
                        .attr('cy', y)
                        .attr('r', radius)
                        .attr('fill', obj.color)
                        .attr('stroke', 'black')
                        .attr('stroke-width', 2);

                    // Отображение названия планеты
                    group.append('text')
                        .attr('x', x + radius + 5)
                        .attr('y', y + 5)
                        .attr('fill', 'white')
                        .text(obj.name[0]);

                    // Отображение спутников
                    if (obj.moons) {
                        obj.moons.forEach((moon, moonIndex) => {
                            const moonDistanceFactor = moon.exists ? -1 : 1; // Спутники, которые не существуют, на половине расстояния
                            const moonY = y + (moonIndex + 1) * (moonRadius * 4 * moonDistanceFactor); // Вертикальное расположение спутников

                            // Отображение спутника
                            group.append('circle')
                                .attr('cx', x)
                                .attr('cy', moonY)
                                .attr('r', moonRadius)
                                .attr('fill', moon.exists ? obj.color : 'none')
                                .attr('stroke', moon.exists ? 'none' : obj.color)
                                .attr('stroke-width', 1);

                            // Отображение названия спутника
                            if (moon.exists) {
                                group.append('text')
                                    .attr('x', x + moonRadius + 5)
                                    .attr('y', moonY + 5)
                                    .attr('fill', 'white')
                                    .text(moon.name[0]);
                            } else {
                                group.append('text')
                                    .attr('x', x + moonRadius + 5)
                                    .attr('y', moonY + 5)
                                    .attr('fill', 'white')
                                    .text(moon.name[0] + " (No Data)");
                            }
                        });
                    }
                } else {
                    // Отображение контура для объектов с exists: false
                    group.append('circle')
                        .attr('cx', x)
                        .attr('cy', y)
                        .attr('r', radius)
                        .attr('fill', 'none')
                        .attr('stroke', 'white')
                        .attr('stroke-width', 2);

                    // Отображение названия объекта
                    group.append('text')
                        .attr('x', x + radius + 5)
                        .attr('y', y + 5)
                        .attr('fill', 'white')
                        .text(obj.name[0]);
                }
            }

            // Отображение объектов
            data.forEach((obj, index) => {
                drawObject(obj, index);
            });

            // Применяем масштабирование
            svg.call(d3.zoom().on('zoom', (event) => {
                group.attr('transform', event.transform);
            }));
        }
    }, [data]);

    return <svg ref={svgRef}></svg>;
};

export default SunSystem;
