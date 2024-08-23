import React, { useRef, useState, useEffect } from 'react';
import { drawAngle } from './углы';
import { drawRegularPolygon } from './многоугольники';
import { drawStar } from './звёзды';
import { drawDirection } from './направленія';
import { drawEllipse } from './овалы';

const DrawingComponent = () => {
	const [number, setNumber] = useState(5);
	const angleCanvasRef = useRef(null);
	const figureCanvasRef = useRef(null);
	const starCanvasRef = useRef(null);
	const directionCanvasRef = useRef(null);
	const ellipseCanvasRef = useRef(null);

	useEffect(() => {
		const angleCtx = angleCanvasRef.current.getContext('2d');
		const figureCtx = figureCanvasRef.current.getContext('2d');
		const starCtx = starCanvasRef.current.getContext('2d');
		const directionCtx = directionCanvasRef.current.getContext('2d');
		const ellipseCtx = ellipseCanvasRef.current.getContext('2d');

		drawAngle(angleCtx, number);
		drawRegularPolygon(figureCtx, number);
		drawStar(starCtx, number);
		drawDirection(directionCtx, number);
		drawEllipse(ellipseCtx, number);
	}, [number]);

	const handleChange = (e) => {
		const value = parseInt(e.target.value, 10);
		if (value >= 1 && value <= 25) {
			setNumber(value);
		}
	};

	return (
		<div>
			<input
				type="number"
				value={number}
				onChange={handleChange}
				min="1"
				max="25"
				step="1"
				style={{ marginBottom: '20px' }}
			/>
			<div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
				<canvas ref={angleCanvasRef} width="300" height="300" style={{ border: '1px solid black' }} />
				<canvas ref={figureCanvasRef} width="300" height="300" style={{ border: '1px solid black' }} />
				<canvas ref={starCanvasRef} width="300" height="300" style={{ border: '1px solid black' }} />
				<canvas ref={directionCanvasRef} width="300" height="300" style={{ border: '1px solid black' }} />
				<canvas ref={ellipseCanvasRef} width="300" height="300" style={{ border: '1px solid black' }} />
			</div>
		</div>
	);
};

export default DrawingComponent;
