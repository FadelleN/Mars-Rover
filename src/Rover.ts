import Map from "./Map";
class Rover {

    direction: string;
    x: number;
    y: number;
    map: Map; 

    constructor(x, y, direction, map) {
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.map = map
    }
    
    forward() {
        switch (this.direction) {
        case 'N':
            if(this.map.isValidPosition(this.x, this.y + 1)) {
                this.y++;
                console.log("test")
            }
            else
                console.log("position invalide")
            break;
        case 'E':
            if(this.map.isValidPosition(this.x + 1, this.y))
                this.x++;
            else
                console.log("position invalide")
            break;
        case 'S':
            if(this.map.isValidPosition(this.x, this.y - 1))
                this.y--;
            else
                console.log("position invalide")
            break;
        case 'W':
            if(this.map.isValidPosition(this.x - 1, this.y))
                this.x--;
            else
                console.log("position invalide")
            break;
        }
    }

    backward() {
        switch (this.direction) {
        case 'N':
            if(this.map.isValidPosition(this.x, this.y - 1))
                this.y--;
            else
                console.log("position invalide")
            break;
        case 'E':
            if(this.map.isValidPosition(this.x - 1, this.y))
                this.x--;
            else
                console.log("position invalide")
            break;
        case 'S':
            if(this.map.isValidPosition(this.x, this.y + 1))
            this.y++;
        else
            console.log("position invalide")
        break;
        case 'W':
            if(this.map.isValidPosition(this.x + 1, this.y))
            this.x++;
        else
            console.log("position invalide")
        break;
        }
    }
    
    rotateLeft() {
        switch (this.direction) {
        case 'N':
            this.direction = 'W';
            break;
        case 'E':
            this.direction = 'N';
            break;
        case 'S':
            this.direction = 'E';
            break;
        case 'W':
            this.direction = 'S';
            break;
        }
    }
    
    rotateRight() {
        switch (this.direction) {
        case 'N':
            this.direction = 'E';
            break;
        case 'E':
            this.direction = 'S';
            break;
        case 'S':
            this.direction = 'W';
            break;
        case 'W':
            this.direction = 'N';
            break;
        }
    }

    GetPositions() {
        return [this.x, this.y, this.direction]
    }
}

export default Rover