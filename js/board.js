function draw_board(){
	ctx.fillStyle = "#DEB887";
	ctx.fillRect(x_b, y_b, l_b * (15 + 1), l_b * (15 + 1));

	for(let i = 0; i < 15; i++){
		ctx.beginPath()
		ctx.moveTo(x_b + l_b, y_b + (i + 1) * l_b)
		ctx.lineTo(x_b + l_b * 15, y_b + (i + 1) * l_b)
		ctx.stroke()

		ctx.fillStyle = "black"
		ctx.fillText(i + 1, x_b - (l_b / 2), (15 - i) * l_b)
		
		ctx.beginPath()
		ctx.moveTo(x_b + (i + 1) * l_b, y_b + l_b)
		ctx.lineTo(x_b + (i + 1) * l_b, y_b + l_b * 15)
		ctx.stroke()
	
		ctx.fillStyle = "black"	
		ctx.fillText(letters[i], x_b + (i + 1) * l_b, y_b + l_b * 16 + (l_b / 2))
	}
	
	ctx.beginPath()
	ctx.arc(x_b + l_b * 8, y_b + l_b * 8, l_b * 0.1, 0, Math.PI*2)
	ctx.fillStyle = "black"
	ctx.fill()

	ctx.beginPath()
	ctx.arc(x_b + l_b * 4, y_b + l_b * 12, l_b * 0.1, 0, Math.PI*2)
	ctx.fillStyle = "black"
	ctx.fill()

	ctx.beginPath()
	ctx.arc(x_b + l_b * 4, y_b + l_b * 4, l_b * 0.1, 0, Math.PI*2)
	ctx.fillStyle = "black"
	ctx.fill()

	ctx.beginPath()
	ctx.arc(x_b + l_b * 12, y_b + l_b * 12, l_b * 0.1, 0, Math.PI*2)
	ctx.fillStyle = "black"
	ctx.fill()

	ctx.beginPath()
	ctx.arc(x_b + l_b * 12, y_b + l_b * 4, l_b * 0.1, 0, Math.PI*2)
	ctx.fillStyle = "black"
	ctx.fill()
}
