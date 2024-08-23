export const drawStar = (ctx, number) => {
	const width = ctx.canvas.width;
	const height = ctx.canvas.height;
	const centerX = width / 2;
	const centerY = height / 2;
	const radius = Math.min(width, height) / 3;
	const angleStep = (2 * Math.PI) / number;
	const innerRadius = radius / 2;

	// Угол поворота на 90 градусов (π/2 радиан)
	const rotationAngle = -Math.PI / 2;

	ctx.clearRect(0, 0, width, height);
	ctx.beginPath();

	if (number === 1) {
	  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
	} else if (number === 2) {
	  ctx.arc(centerX, centerY, radius, Math.PI, 0);
	  ctx.lineTo(centerX, centerY); // Соединяем конец дуги с центром
	  ctx.lineTo(centerX + radius * Math.cos(Math.PI), centerY + radius * Math.sin(Math.PI)); // Соединяем центр с началом дуги
	} else {
	  for (let i = 0; i < number; i++) {
		const outerAngle = i * angleStep + rotationAngle;
		const innerAngle = (i + 0.5) * angleStep + rotationAngle;
		ctx.lineTo(centerX + radius * Math.cos(outerAngle), centerY + radius * Math.sin(outerAngle));
		ctx.lineTo(centerX + innerRadius * Math.cos(innerAngle), centerY + innerRadius * Math.sin(innerAngle));
	  }
	  ctx.closePath();
	}
	ctx.stroke();
  };
