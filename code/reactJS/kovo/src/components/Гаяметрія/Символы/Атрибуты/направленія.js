// файл: src/направленія.js
export const drawDirection = (ctx, number) => {
	const width = ctx.canvas.width;
	const height = ctx.canvas.height;
	const centerX = width / 2;
	const centerY = height / 2;
	const radius = Math.min(width, height) / 2.5;  // Уменьшаем радиус для лучшей видимости

	ctx.clearRect(0, 0, width, height);
	ctx.beginPath();

	// Рисуем круг компаса
	ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);

	const totalDivisions = 24; // Количество делений на компасе
	const angleStep = (2 * Math.PI) / totalDivisions; // Угол смещения для каждого деления
	const angle = (number - 1) * angleStep;

	// Рисуем линию, указывающую направление
	ctx.moveTo(centerX, centerY);
	ctx.lineTo(centerX + radius * Math.cos(angle - Math.PI / 2), centerY + radius * Math.sin(angle - Math.PI / 2));
	ctx.stroke();

	// Добавляем обозначения сторон света
	const directions = ['С', 'СВ', 'В', 'ЮВ', 'Ю', 'ЮЗ', 'З', 'СЗ'];
	for (let i = 0; i < 8; i++) {
	  const dirAngle = (i * Math.PI / 4) - Math.PI / 2;
	  const textX = centerX + (radius + 15) * Math.cos(dirAngle);
	  const textY = centerY + (radius + 15) * Math.sin(dirAngle);
	  ctx.fillText(directions[i], textX, textY);
	}
  };
