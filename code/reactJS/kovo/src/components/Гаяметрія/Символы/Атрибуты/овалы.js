export const drawEllipse = (ctx, number) => {
	const width = ctx.canvas.width;
	const height = ctx.canvas.height;
	const centerX = width / 2;
	const centerY = height / 2;

	let radiusY = Math.min(width, height) / 3; // Задаем фиксированный радиус по высоте
	let radiusX;

	if (number === 1) {
	  radiusX = radiusY; // Круг
	} else {
	  // Для остальных значений, вычисляем ширину
	  const angleInRadians = Math.PI / number;
	  radiusX = radiusY / Math.cos(angleInRadians); // Пропорциональное увеличение ширины
	}

	ctx.clearRect(0, 0, width, height);
	ctx.beginPath();
	ctx.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, 2 * Math.PI);
	ctx.stroke();
  };
