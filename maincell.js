var canv = document.getElementById("map");
var ctx = canv.getContext("2d");
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canv.width, canv.height);

const frameevent = new Event("frame");

class Map {
	constructor() {
		this.cells = {};
	}
	default = false;
	get(x, y) {
		if (!(y in this.cells)) {
			return this.default;
		}
		if (!(x in this.cells[y])) {
			return this.default;
		}
		return this.cells[y][x];
	}
	set(x, y, val) {
		if (!(y in this.cells)) {
			this.cells[y] = {};
		}
		this.cells[y][x] = val;
		canv.dispatchEvent(frameevent);
	}
}

var M = new Map();

function canvupdate() {
	console.log("Frame! :D");
}

canv.addEventListener("frame", canvupdate);

