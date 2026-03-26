const canvas = document.getElementById("board")
const ctx = canvas.getContext("2d")
const rect = canvas.getBoundingClientRect();


const x_b = 40
const y_b = 0
const l_b = 40

ctx.textBaseline = "middle"
ctx.textAlign = "center"
const letters = "ABCDEFGHIJKLMNO"

canvas.width = l_b * (15 + 1) + 40
canvas.height = l_b * (15 + 1) + 40

let files = [];
files.push("H9.txt");
files.push("I9.txt");

let record = "";
let records = [];

let edit = false