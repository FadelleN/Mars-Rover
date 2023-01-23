import Rover from "./Rover";

class MoveForwardCommand {

    rover: Rover

    constructor(rover) {
        this.rover = rover;
    }

    execute() {
        this.rover.forward();
    }
}

export default MoveForwardCommand
