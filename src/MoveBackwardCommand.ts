import Rover from "./Rover";

class MoveBackwardCommand {

    rover: Rover

    constructor(rover) {
        this.rover = rover;
    }

    execute() {
        this.rover.backward();
    }
}

export default MoveBackwardCommand
