import MoveForwardCommand from "./MoveForwardCommand";
import MoveBackwardCommand from "./MoveBackwardCommand";
import Rover from "./Rover";

class RoverControl {

    rover: Rover
    commands : MoveForwardCommand[]

    constructor(rover) {
        this.rover = rover;
        this.commands = [];
    }

    addCommand(command) {
        this.commands.push(command);
    }

    executeCommands() {
        for (let command of this.commands) {
            command.execute();
        }
    }
}

export default RoverControl