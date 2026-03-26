async function open_files(){
	for (let file of files) {
		const a = await fetch(file);
		if (!a.ok) continue;
		const texts = await a.text();
		text = texts
		.split(/\r?\n/)
		.map(line => line.trim())
		.filter(line => line !== "");
		records.push(...text);
	
	}
}

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