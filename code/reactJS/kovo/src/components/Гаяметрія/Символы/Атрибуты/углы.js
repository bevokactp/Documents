export const drawAngle = (ctx, number) => {
	const width = ctx.canvas.width;
	const height = ctx.canvas.height;
	const centerX = width / 2;
	const centerY = height / 2;
	const radius = Math.min(width, height) / 3;
	const angleStep = (2 * Math.PI) / number;

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
		const startAngle = Math.PI / 2;
		const endAngle = startAngle - angleStep;

		ctx.moveTo(centerX, centerY);
		ctx.lineTo(centerX + radius * Math.cos(startAngle + rotationAngle), centerY + radius * Math.sin(startAngle + rotationAngle));
		ctx.moveTo(centerX, centerY);
		ctx.lineTo(centerX + radius * Math.cos(endAngle + rotationAngle), centerY + radius * Math.sin(endAngle + rotationAngle));
	}
	ctx.stroke();
};
