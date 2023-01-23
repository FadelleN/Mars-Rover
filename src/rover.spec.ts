import Rover from './Rover';
import Map from './Map';
import RoverControl from './RoverControl';
import RotateLeftCommand from './RotateLeftCommand';
import RotateRightCommand from './RotateRightCommand';
import MoveForwardCommand from './MoveForwardCommand';
import MoveBackwardCommand from './MoveBackwardCommand';

describe('mars rover', () => {

    it('test', () => {

        const grid = [
            [true, true, true],
            [true, true, true],
            [true, true, true]
        ];
        const map = new Map(grid);

        const rover = new Rover(0, 0, 'N', map);

        const roverControl = new RoverControl(rover);
        roverControl.addCommand(new MoveForwardCommand(rover));
        roverControl.addCommand(new RotateLeftCommand(rover));
        roverControl.addCommand(new MoveForwardCommand(rover));
        roverControl.addCommand(new RotateRightCommand(rover));
        // roverControl.addCommand(new BackwardCommand(rover));
        
        roverControl.executeCommands();
        expect(rover.GetPositions()).toStrictEqual([-1, 1, 'N'])
    });

    // it('landing mars rover', () => {
    //     const marsRover = new Rover(0, 0, 'N')
    //     expect(marsRover.getPositions()).toStrictEqual({ x: 0, y: 0, orientation: 'N' })
    // });

    // it('forward', () => {
    //     const marsRover = new Rover(0, 0, 'N')
    //     marsRover.forward()
    //     expect(marsRover.getPositions()).toStrictEqual({ x: 0, y: 1, orientation: 'N' })
    // });

    // it('backward', () => {
    //     const marsRover = new Rover(0, 0, 'N')
    //     marsRover.backward()
    //     expect(marsRover.getPositions()).toStrictEqual({ x: 0, y: -1, orientation: 'N' })
    // });

    // it('rotate right', () => {
    //     const marsRover = new Rover(0, 0, 'N')
    //     marsRover.rotate('l')
    //     expect(marsRover.getPositions()).toStrictEqual({ x: 0, y: 0, orientation: 'O' })
    // });

    // it('rotate left', () => {
    //     const marsRover = new Rover(0, 0, 'N')
    //     marsRover.rotate('r')
    //     expect(marsRover.getPositions()).toStrictEqual({ x: 0, y: 0, orientation: 'E' })
    // });

    // it('orders straight line', () => {
    //     const marsRover = new Rover(0, 0, 'N')
    //     marsRover.orders("ffffff")
    //     expect(marsRover.getPositions()).toStrictEqual({ x: 0, y: 6, orientation: 'N' })
    // });

    // it('orders diagonal', () => {
    //     const marsRover = new Rover(0, 0, 'N')
    //     marsRover.orders("frflfr")
    //     expect(marsRover.getPositions()).toStrictEqual({ x: 1, y: 2, orientation: 'E' })
    // });

    // it('orders straight backward', () => {
    //     const marsRover = new Rover(0, 0, 'N')
    //     marsRover.orders("bbbbbb")
    //     expect(marsRover.getPositions()).toStrictEqual({ x: 0, y: -6, orientation: 'N' })
    // });

    // it('random orders', () => {
    //     const marsRover = new Rover(0, 0, 'N')
    //     marsRover.orders("rlrbbrbfllbfffr")
    //     expect(marsRover.getPositions()).toStrictEqual({ x: -2, y: 2, orientation: 'E' })
    // });
});