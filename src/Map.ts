class MapR {

    maxX: number;
    maxY: number;
    grid: boolean[][];

    constructor(grid: boolean[][]) {
        this.grid = grid;
        this.maxX = grid.length - 1;
        this.maxY = grid[0].length - 1;
    }

    isValidPosition(x: number, y: number): boolean {
        return x >= 0 && x <= this.maxX && y >= 0 && y <= this.maxY && this.grid[x][y];
    }

}

export default MapR