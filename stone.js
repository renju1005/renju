function draw_stone(){
	for(let i = 0; i < record.length/3; i++){
		let x = record.charCodeAt(i*3) - 65
		let y = 15 - parseInt(record.slice(i*3+1, i*3+3))

		if(i%2 === 0){
			ctx.fillStyle = "black"
		}
		else{
			ctx.fillStyle = "white"
		}

		ctx.beginPath()
		ctx.arc(x_b + l_b + x*l_b, l_b + y*l_b, l_b * 0.5, 0, Math.PI * 2)
		ctx.fill();
		ctx.stroke();
	}


	records.forEach(v => {
		if(v.startsWith(record)&&v.length === record.length + 3){
			let next = v.slice(record.length);
			
			if((record.length/3)%2 === 0){
				ctx.fillStyle = "black"
			}
			else{
				ctx.fillStyle = "white"
			}

			ctx.beginPath()
			ctx.arc(get_x(next), get_y(next), l_b * 0.2, 0, Math.PI * 2)
			ctx.fill();
			ctx.stroke();	
		}
	})
}