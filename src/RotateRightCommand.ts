import Rover from "./Rover";

class RotateRightCommand {

    rover : Rover

    constructor(rover) {
        this.rover = rover;
    }

    execute() {
        this.rover.rotateRight();
    }
}

export default RotateRightCommand