// src/components/Astronomy/StarMap.jsx
import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

// Пример данных о звездах с указанием созвездий
const stars = [
  { name: 'Sirius', ra: 6.75, dec: -16.7161, constellation: 'Canis Major' },
  { name: 'Betelgeuse', ra: 5.9195, dec: 7.4071, constellation: 'Orion' },
  { name: 'Rigel', ra: 5.2428, dec: -8.2016, constellation: 'Orion' },
  { name: 'Procyon', ra: 7.6553, dec: 5.2250, constellation: 'Canis Minor' },
  { name: 'Aldebaran', ra: 4.5981, dec: 16.5093, constellation: 'Taurus' },
  { name: 'Capella', ra: 5.2784, dec: 45.9994, constellation: 'Auriga' },
  { name: 'Arcturus', ra: 14.2610, dec: 19.1825, constellation: 'Boötes' },
  { name: 'Vega', ra: 18.6156, dec: 38.7833, constellation: 'Lyra' },
  { name: 'Altair', ra: 19.8463, dec: 8.8683, constellation: 'Aquila' },
  { name: 'Antares', ra: 16.4894, dec: -26.4326, constellation: 'Scorpius' },
  { name: 'Spica', ra: 13.4204, dec: -11.1616, constellation: 'Virgo' },
  { name: 'Fomalhaut', ra: 22.9606, dec: -29.6228, constellation: 'Piscis Austrinus' },
  { name: 'Deneb', ra: 20.6907, dec: 45.2801, constellation: 'Cygnus' },
  { name: 'Albireo', ra: 19.2950, dec: 27.9583, constellation: 'Cygnus' },
  { name: 'Sadr', ra: 20.9086, dec: 40.2310, constellation: 'Cygnus' },
  { name: 'Alderamin', ra: 21.1583, dec: 62.6011, constellation: 'Cepheus' },
  { name: 'Algol', ra: 23.4625, dec: 40.5730, constellation: 'Perseus' },
  { name: 'Mizar', ra: 13.3970, dec: 54.9250, constellation: 'Ursa Major' },
  { name: 'Polaris', ra: 2.5308, dec: 89.2641, constellation: 'Ursa Minor' },
  { name: 'Castor', ra: 7.8491, dec: 31.8884, constellation: 'Gemini' },
  { name: 'Pollux', ra: 7.7553, dec: 28.0260, constellation: 'Gemini' }
];

// Функция для генерации случайного цвета в формате HEX
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const width = 800;
const height = 600;

const StarMap = () => {
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .style('background', '#000');

    // Создание проекции
    const projection = d3.geoOrthographic()
      .scale(300)
      .translate([width / 2, height / 2])
      .rotate([0, -23.5]); // Корректировка для наклона оси Земли

    // Определение цветов для созвездий
    const constellationColors = {};
    stars.forEach(star => {
      if (!constellationColors[star.constellation]) {
        constellationColors[star.constellation] = getRandomColor();
      }
    });

    // Добавление звёзд
    svg.selectAll('circle')
      .data(stars)
      .enter()
      .append('circle')
      .attr('cx', d => projection([d.ra, d.dec])[0])
      .attr('cy', d => projection([d.ra, d.dec])[1])
      .attr('r', 5)
      .attr('fill', d => constellationColors[d.constellation]);

    // Добавление названий звёзд
    svg.selectAll('text')
      .data(stars)
      .enter()
      .append('text')
      .attr('x', d => projection([d.ra, d.dec])[0])
      .attr('y', d => projection([d.ra, d.dec])[1])
      .attr('dy', -10)
      .attr('text-anchor', 'middle')
      .attr('fill', 'white')
      .text(d => d.name);
  }, []);

  return (
    <svg ref={svgRef}></svg>
  );
};

export default StarMap;
