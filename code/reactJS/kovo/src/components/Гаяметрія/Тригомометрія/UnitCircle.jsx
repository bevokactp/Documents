import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';






   // если в фильтре выбран
   //    синус
   //       рисуй отрезок цветом синуса от точки Б к т В
   //       рисуй отрезок цветом синуса от точки ААА к т Д
   //    косинус
   //       рисуй отрезок цветом косинуса от точки В к т ААА
   //       рисуй отрезок цветом косинуса от точки Б к т Д

   // радиус Р -- нарисован под углом от оси Х
   // касательная К -- от оси У через точку АА под углом 90* к радиус Р и продолжается до оси Х
   // т ОО - начало координат
   // т ВВ - пересечение круга с положительной частью оси У
   // т НН - пересечение круга с отрицательной частью оси У
   // т ЛЛ - пересечение круга с отрицательной частью оси Х
   // т ПП - пересечение круга с положительной частью оси Х
   // т АА - точка пересечения линия радиуса Р и круга
   // т ББ - точка пересечения перпендикуляра от т АА с осью Х
   // т ВВ - точка пересечения перпендикуляра от т АА с осью У

   // нарисовать касательную в точке Б
   // подписать точки


const UnitCircle = () => {
  const svgRef = useRef();
  const [angle, setAngle] = useState(60); // Default angle in degrees

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const width = 500;
    const height = 500;
    const radius = width / 2;
    const circleRadius = radius - 10; // Margin from edge
    const angleRad = (angle * Math.PI) / 180; // Convert angle to radians

    svg.attr('width', width)
       .attr('height', height);

    svg.selectAll('*').remove(); // Clear previous content

    // Draw unit circle
    svg.append('circle')
       .attr('cx', radius)
       .attr('cy', radius)
       .attr('r', circleRadius)
       .style('fill', 'none')
       .style('stroke', 'black');

    // Draw axes
    svg.append('line')
       .attr('x1', 0)
       .attr('y1', radius)
       .attr('x2', width)
       .attr('y2', radius)
       .style('stroke', 'gray')
       .style('stroke-width', 1);

    svg.append('line')
       .attr('x1', radius)
       .attr('y1', 0)
       .attr('x2', radius)
       .attr('y2', height)
       .style('stroke', 'gray')
       .style('stroke-width', 1);

    // Calculate points
    const xEnd = radius + circleRadius * Math.cos(angleRad);
    const yEnd = radius - circleRadius * Math.sin(angleRad);

    // Draw radius in green
    svg.append('line')
       .attr('x1', radius)
       .attr('y1', radius)
       .attr('x2', xEnd)
       .attr('y2', yEnd)
       .style('stroke', 'green')
       .style('stroke-width', 2);

    // Draw perpendicular (tangent) from the radius end point to the circle in blue
    const xTangentEnd = xEnd + circleRadius * Math.sin(angleRad); // X-coordinate for tangent line
    const yTangentEnd = yEnd + circleRadius * Math.cos(angleRad); // Y-coordinate for tangent line

    svg.append('line')
       .attr('x1', xEnd)
       .attr('y1', yEnd)
       .attr('x2', xTangentEnd)
       .attr('y2', yTangentEnd)
       .style('stroke', 'blue')
       .style('stroke-width', 2);

    // Draw perpendicular from the radius end point to the X-axis
    svg.append('line')
       .attr('x1', xEnd)
       .attr('y1', yEnd)
       .attr('x2', xEnd)
       .attr('y2', radius)
       .style('stroke', 'black')
       .style('stroke-width', 2);

    // Draw perpendicular from the radius end point to the Y-axis
    svg.append('line')
       .attr('x1', xEnd)
       .attr('y1', yEnd)
       .attr('x2', radius)
       .attr('y2', yEnd)
       .style('stroke', 'black')
       .style('stroke-width', 2);

    // Draw point АА
    svg.append('circle')
       .attr('cx', xEnd)
       .attr('cy', yEnd)
       .attr('r', 4)
       .style('fill', 'black');

    // Draw point ББ
    svg.append('circle')
       .attr('cx', xEnd)
       .attr('cy', radius)
       .attr('r', 4)
       .style('fill', 'black');

    // Draw point В
    svg.append('circle')
       .attr('cx', radius)
       .attr('cy', yEnd)
       .attr('r', 4)
       .style('fill', 'black');

    // Draw labels
    svg.append('text')
       .attr('x', radius + 10)
       .attr('y', radius - 10)
       .style('font-size', '12px')
       .style('fill', 'black')
       .text('ОО (0,0)');

    svg.append('text')
       .attr('x', xEnd + 10)
       .attr('y', yEnd - 10)
       .style('font-size', '12px')
       .style('fill', 'black')
       .text('АА');

    svg.append('text')
       .attr('x', xEnd + 10)
       .attr('y', radius + 15)
       .style('font-size', '12px')
       .style('fill', 'black')
       .text('ББ');

    svg.append('text')
       .attr('x', radius + 10)
       .attr('y', yEnd - 10)
       .style('font-size', '12px')
       .style('fill', 'black')
       .text('В');

  }, [angle]);

  const handleAngleChange = (e) => {
    setAngle(e.target.value);
  };

  return (
    <div>
      <input
        type="number"
        min="0"
        max="360"
        value={angle}
        onChange={handleAngleChange}
        style={{ marginBottom: '10px' }}
      />
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default UnitCircle;
