const wavesOpacities = [0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1];
const canvasHeight = 100;
var speedInc = 0;

const params = {
	AMPLITUDE_WAVES: canvasHeight,
	AMPLITUDE_MIDDLE: canvasHeight / 3,
	AMPLITUDE_SIDES: canvasHeight / 2,
	OFFSET_SPEED: 120,
	SPEED: 3,
	OFFSET_WAVES: 35,
	NUMBER_WAVES: 3,
	COLOR: '#E24A4A',
	NUMBER_CURVES: 2,
	OFFSET_CURVE: true,
	RESET: false
};

export const render = (canvas, color1, color2) => {

    const ctx = canvas.getContext('2d');

	canvas.width = window.innerWidth;

	// For each wave
	for (let j = params.NUMBER_WAVES - 1; j >= 0; j--) {
		// offset between waves
		let offset = speedInc + j * Math.PI * params.OFFSET_WAVES;

		// Color and increase gradually opacity
		if (j === 0) {
			ctx.fillStyle = color1;
		} else {
			ctx.fillStyle = color2;
		}
		ctx.globalAlpha = wavesOpacities[j];


	
		let leftRange = ((Math.sin((offset / params.OFFSET_SPEED) + 2) + 1) / 2 * params.AMPLITUDE_SIDES) + (canvas.height - params.AMPLITUDE_SIDES) / 2;
		let rightRange = ((Math.sin((offset / params.OFFSET_SPEED) + 2) + 1) / 2 * params.AMPLITUDE_SIDES) + (canvas.height - params.AMPLITUDE_SIDES) / 2;

		// Speed amplitude variation between 0 and AMPLITUDE_WAVES ( height window)
		// Set height amplitude of the first and second points of a curve
		let leftCurveRange = (Math.sin((offset / params.OFFSET_SPEED) + 2) + 1) / 2 * params.AMPLITUDE_WAVES + (canvas.height - params.AMPLITUDE_WAVES) / 2;
		let rightCurveRange = (Math.sin((offset / params.OFFSET_SPEED) + 1) + 1) / 2 * params.AMPLITUDE_WAVES + (canvas.height - params.AMPLITUDE_WAVES) / 2;

		// Speed amplitude variation between 0 and AMPLITUDE_MIDDLE
		// Set height amplitude of the last point of a curve
		let endCurveRange = ((Math.sin((offset / params.OFFSET_SPEED) + 2) + 1) / 2 * params.AMPLITUDE_MIDDLE) + (canvas.height - params.AMPLITUDE_MIDDLE) / 2;

		// Reverse amplitude of the first and second points of a curve (only needed with 3 curves or more)
		let reverseLeftCurveRange = endCurveRange - rightCurveRange + endCurveRange;
		let reverseRightCurveRange = endCurveRange - leftCurveRange + endCurveRange;

		// Neutralise curves first and second point amplitude
		if (params.OFFSET_CURVE === false) {

			leftCurveRange = rightCurveRange;
			reverseRightCurveRange = reverseLeftCurveRange;

		}


		// Draw and fill path
		ctx.beginPath();

		// Draw first point from Left
		ctx.moveTo(0, leftRange);

		// Draw bezier curves based on amplitude

		// Draw each points of the first curve
		// bezierCurveTo() see https://www.w3schools.com/TAGs/canvas_beziercurveto.asp
		ctx.bezierCurveTo(canvas.width / (params.NUMBER_CURVES * 3), leftCurveRange, canvas.width / (params.NUMBER_CURVES * 3 / 2), rightCurveRange, canvas.width / params.NUMBER_CURVES, endCurveRange);

		// Draw each points of other curves if needed
		for (let i = 1; i < params.NUMBER_CURVES; i++) {
			
			// Reverse waves amplitude 1 / 2 times
			const finalRightCurveRange = i % 2 !== 0 ? rightCurveRange : reverseRightCurveRange;
			const finalLeftCurveRange = i % 2 !== 0 ? leftCurveRange : reverseLeftCurveRange;

			// Set points curve
			const secondPtX = canvas.width * (i / params.NUMBER_CURVES) + canvas.width / (params.NUMBER_CURVES * 3);
			const secondPtY = endCurveRange - finalRightCurveRange + endCurveRange;
			const thirdPtX = canvas.width * (i / params.NUMBER_CURVES) + canvas.width * (2 / (params.NUMBER_CURVES * 3));
			const thirdPtY = endCurveRange - finalLeftCurveRange + endCurveRange;
			const lastPtX = canvas.width * ((i + 1) / params.NUMBER_CURVES);
			const lastPtY = i === params.NUMBER_CURVES - 1 ? rightRange : endCurveRange;
			
			ctx.bezierCurveTo(secondPtX, secondPtY, thirdPtX, thirdPtY, lastPtX, lastPtY);

		}

		// Draw last lines

		ctx.lineTo(canvas.width, canvas.height);
		ctx.lineTo(0, canvas.height);
		ctx.lineTo(0, rightRange);

		ctx.closePath();
		ctx.fill();
	}

	// Speed
	speedInc += params.SPEED;
};