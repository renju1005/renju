open_files()
draw_board();
draw_stone();

canvas.addEventListener("click", function(e){
	let col = Math.round((e.clientX -rect.left - x_b - l_b)/l_b)
	let row = Math.round((e.clientY - rect.top - y_b - l_b)/l_b)
	
	if (col < 0 || col >14 || row<0 || row>14){
		return;
	}

	x_char = String.fromCharCode(65+col)
	y_char = String(15 - row).padStart(2, "0")
	move = (x_char + y_char)
		if (!record.includes(move)){
			if(edit === true || records.includes(record+move)){
			record += move
				if(!records.includes(record)){
					records.push(record);
					records.sort();
				}
				draw_board()
				draw_stone()
			}
		}
})

canvas.addEventListener("contextmenu", function(e){
	e.preventDefault();
})

canvas.addEventListener("mousedown", function(e){

	if(e.button === 2){
		if(record.length > 0){
		record = record.slice(0, -3)

		draw_board()
		draw_stone()
		}
	}
})

document.addEventListener("keydown", function(e){
	if(e.key.toLowerCase() === "s"){

		let blob = new Blob([records.join("\n")], { type: "text/plain" });
		let a = document.createElement("a");
		a.href = URL.createObjectURL(blob);
		a.download = record + ".txt";
		a.click();
		URL.revokeObjectURL(a.href);

		//alert("저장")
	}
})

document.addEventListener("keydown", function(e){
	if(e.key.toLowerCase() === "o"){
	fileInput.click();
	}
})

document.getElementById("fileInput").addEventListener("change", function(e){
	const file = e.target.files[0];
	if (!file) return;
	const reader = new FileReader();
	
	reader.onload = function(event){
		console.log("파일 읽음");
		const content = event.target.result;
		record = ""
		records = content
		.split(/\r?\n/)
		.map(line => line.trim())
		.filter(line => line !=="");
		draw_board()
		draw_stone()
	}
	reader.readAsText(file);
})

document.addEventListener("keydown", function(e){
	if(e.key === "Delete"){
		
		let yes = confirm("")
		if(!yes){
			return;
		}
		records = records.filter(function(v){
			return !v.startsWith(record);
		});

		if(record.length > 0){
		record = record.slice(0, -3)

		draw_board()
		draw_stone()
		}
	}
})

document.addEventListener("keydown", function(e){

	if(e.key.toLowerCase() === "e"){
		edit = !edit
	}
})

document.addEventListener("keydown", function(e){

	if(e.key.toLowerCase() === "q"){
		alert(text);
	}
})

draw_board()
draw_stone()