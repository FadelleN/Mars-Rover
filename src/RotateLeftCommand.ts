import Rover from "./Rover";

class RotateLeftCommand {
    
    rover: Rover
    
    constructor(rover) {
        this.rover = rover;
    }

    execute() {
        this.rover.rotateLeft();
    }
}

export default RotateLeftCommand