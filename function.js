function get_x(move){
	let x = move.charCodeAt(0) - 65;
	x = x_b + l_b + l_b * x;
	return x;
}

function get_y(move){
	let y = 15 - parseInt(move.slice(1));
	y = y_b + l_b + l_b * y;
	return y;
}