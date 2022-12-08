class Rover {

    orientation: string;
    x: number;
    y: number;


    constructor(x: number, y: number, orientation: string) {
        this.x = x
        this.y = y
        this.orientation = orientation
    }

    getPositions() {
        return { x: this.x, y: this.y, orientation: this.orientation }
    }

    forward() {
        switch (this.orientation) {
            case 'N':
                this.y += 1
                break
            case 'S':
                this.y -= 1
                break
            case 'E':
                this.x += 1
                break
            case 'O':
                this.x -= 1
                break
        }
    }

    backward() {
        switch (this.orientation) {
            case 'N':
                this.y -= 1
                break
            case 'S':
                this.y += 1
                break
            case 'E':
                this.x -= 1
                break
            case 'O':
                this.x += 1
                break
        }
    }

    rotate(direction: string) {
        switch (this.orientation) {
            case 'N':
                if (direction === 'r') {
                    this.orientation = 'E'
                }
                else {
                    this.orientation = 'O'
                }
                break
            case 'S':
                if (direction === 'r') {
                    this.orientation = 'O'
                }
                else {
                    this.orientation = 'E'
                }
                break
            case 'E':
                if (direction === 'r') {
                    this.orientation = 'S'
                }
                else {
                    this.orientation = 'N'
                }
                break
            case 'O':
                if (direction === 'r') {
                    this.orientation = 'N'
                }
                else {
                    this.orientation = 'S'
                }
                break
        }
    }

    orders(instructions: string) {
        const arr: string[] = [...instructions];
        arr.forEach((char) => {
            if (char === 'f') {
                this.forward()
            }
            else if (char === 'b') {
                this.backward()
            }
            else {
                this.rotate(char)
            }

            if(this.x > 10) {
                this.x = -10
                if(this.orientation === 'E') {
                    this.orientation = 'O'
                }
                else {
                    this.orientation = 'E'
                }
            }
    
            if(this.x < -10) {
                this.x = 10
                if(this.orientation === 'O') {
                    this.orientation = 'E'
                }
                else {
                    this.orientation = 'O'
                }
            }
    
            if(this.y > 10) {
                this.y = -10
                if(this.orientation === 'N') {
                    this.orientation = 'S'
                }
                else {
                    this.orientation = 'N'
                }
            }
    
            if(this.y < -10) {
                this.y = 10
                if(this.orientation === 'S') {
                    this.orientation = 'N'
                }
                else {
                    this.orientation = 'S'
                }
            }
            console.log("the Rover position is now x : " + this.x + " y : " + this.y + " and orientation : " + this.orientation)
        }) 
    }
}

export default Rover