var canv = document.getElementById("map");
var ctx = canv.getContext("2d");
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canv.width, canv.height);

const frameevent = new Event("frame");

class Map {
	constructor() {
		this.cells = {};
		this.fallbackval = false;
		this.centerpt = {x: -250, y: -250};
	}
	get(x, y) {
		if (!(y in this.cells)) {
			return this.fallbackval;
		}
		if (!(x in this.cells[y])) {
			return this.fallbackval;
		}
		return this.cells[y][x];
	}
	set(x, y, val) {
		if (!(y in this.cells)) {
			this.cells[y] = {};
		}
		this.cells[y][x] = val;
		
		ctx.fillStyle = val ? "white" : "green";
		ctx.fillRect(
			x - this.centerpt.x,
			y - this.centerpt.y, 1, 1
		);
	}
	canvupdate() {
		console.log("Frame! :D");
		// TODO: replace with variable offset
		var perf0 = performance.now();
		for(iy = -250; iy < 250; iy++) {
			for (ix = -250; ix < 250; ix++) {
			}
		}
		dperf = performance.now() - perf0;
		console.log("Took " + dperf.toString() + " ms");
	}
}

var M = new Map();

canv.addEventListener("frame", canvupdate);

