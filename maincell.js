var canv = document.getElementById("map");
var ctx = canv.getContext("2d");
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canv.width, canv.height);

class Map {
	constructor() {
		this.cells = {};
	}
	default = false;
	get(x, y) {
		if (!(y in this.cells.keys())) {
			return this.default;
		}
		if (!(x in this.cells[y].keys())) {
			return this.default;
		}
		return this.cells[y][x];
	}
	set(x, y, val) {
		if (!(y in this.cells.keys())) {
			this.cells[y] = {};
		}
		this.cells[y][x] = val;
	}
}

