

const drawSimple3 = ({ number }) => {
	const size = 200;
	const circleRadius = 5;
	const spacing = 10;

	const getPoints = (n) => {
		let points = [];
		let k = 0;
		for (let i = 1; i <= n; i++) {
			for (let j = 0; j < i; j++) {
				points.push([
					size / 2 + j * spacing - (i - 1) * spacing / 2,
					size / 2 + k * spacing
				]);
			}
			k++;
		}
		return points;
	};

	const points = getPoints(number);

	return (
		<svg width={size} height={size} xmlns="http://www.w3.org/2000/svg">
			<rect width={size} height={size} fill="white" />
			{points.map((point, index) => (
				<circle
					key={index}
					cx={point[0]}
					cy={point[1]}
					r={circleRadius}
					fill="orange"
				/>
			))}
		</svg>
	);
};


const drawSimple4 = ({ number }) => {
	const size = 200;
	const circleRadius = 5;
	const spacing = 10;

	const getPoints = (n) => {
		let points = [];
		let gridSize = Math.sqrt(n);
		let startX = size / 2 - (gridSize * spacing) / 2 + spacing / 2;
		let startY = size / 2 - (gridSize * spacing) / 2 + spacing / 2;
		for (let i = 0; i < gridSize; i++) {
			for (let j = 0; j < gridSize; j++) {
				points.push([
					startX + j * spacing,
					startY + i * spacing
				]);
			}
		}
		return points;
	};

	const points = getPoints(number);

	return (
		<svg width={size} height={size} xmlns="http://www.w3.org/2000/svg">
			<rect width={size} height={size} fill="white" />
			{points.map((point, index) => (
				<circle
					key={index}
					cx={point[0]}
					cy={point[1]}
					r={circleRadius}
					fill="red"
				/>
			))}
		</svg>
	);
};

const drawSimple5 = ({ number }) => {
	const size = 200;
	const circleRadius = 5;
	const spacing = 10;

	const getPoints = (n) => {
		let points = [];
		let radius = spacing * (n - 1);
		for (let i = 1; i <= n; i++) {
			for (let j = 0; j < i; j++) {
				let angle = 2 * Math.PI * j / i;
				let x = size / 2 + radius * Math.cos(angle);
				let y = size / 2 + radius * Math.sin(angle);
				points.push([x, y]);
			}
			radius -= spacing;
		}
		return points;
	};

	const points = getPoints(number);

	return (
		<svg width={size} height={size} xmlns="http://www.w3.org/2000/svg">
			<rect width={size} height={size} fill="white" />
			{points.map((point, index) => (
				<circle
					key={index}
					cx={point[0]}
					cy={point[1]}
					r={circleRadius}
					fill="blue"
				/>
			))}
		</svg>
	);
};


const drawSimple6 = ({ number }) => {
	const size = 200;
	const circleRadius = 5;
	const spacing = 10;

	const getPoints = (n) => {
		let points = [];
		let radius = spacing * (n - 1);
		for (let i = 1; i <= n; i++) {
			for (let j = 0; j < 6; j++) {
				let angle = Math.PI / 3 * j;
				let x = size / 2 + radius * Math.cos(angle);
				let y = size / 2 + radius * Math.sin(angle);
				points.push([x, y]);
			}
			radius -= spacing;
		}
		return points;
	};

	const points = getPoints(number);

	return (
		<svg width={size} height={size} xmlns="http://www.w3.org/2000/svg">
			<rect width={size} height={size} fill="white" />
			{points.map((point, index) => (
				<circle
					key={index}
					cx={point[0]}
					cy={point[1]}
					r={circleRadius}
					fill="green"
				/>
			))}
		</svg>
	);
};


const DrawSimpleFigurativeNumbers = ({ type, number }) => {
	const drawSimpleFigurativeNumbers = {
		3: drawSimple3,
		4: drawSimple4,
		5: drawSimple5,
		6: drawSimple6,
	}

	const DrawFunction = drawSimpleFigurativeNumbers[type];
    if (!DrawFunction) {
        return <div>???</div>;
    }
    return <DrawFunction number={number} />;
};

export default DrawSimpleFigurativeNumbers;
