import Rover from './Rover';

describe('mars rover', () => {

    it('landing mars rover', () => {
        const marsRover = new Rover(0, 0, 'N')
        expect(marsRover.getPositions()).toStrictEqual({ x: 0, y: 0, orientation: 'N' })
    });

    it('forward', () => {
        const marsRover = new Rover(0, 0, 'N')
        marsRover.forward()
        expect(marsRover.getPositions()).toStrictEqual({ x: 0, y: 1, orientation: 'N' })
    });

    it('backward', () => {
        const marsRover = new Rover(0, 0, 'N')
        marsRover.backward()
        expect(marsRover.getPositions()).toStrictEqual({ x: 0, y: -1, orientation: 'N' })
    });

    it('rotate right', () => {
        const marsRover = new Rover(0, 0, 'N')
        marsRover.rotate('l')
        expect(marsRover.getPositions()).toStrictEqual({ x: 0, y: 0, orientation: 'O' })
    });

    it('rotate left', () => {
        const marsRover = new Rover(0, 0, 'N')
        marsRover.rotate('r')
        expect(marsRover.getPositions()).toStrictEqual({ x: 0, y: 0, orientation: 'E' })
    });

    it('orders straight line', () => {
        const marsRover = new Rover(0, 0, 'N')
        marsRover.orders("ffffff")
        expect(marsRover.getPositions()).toStrictEqual({ x: 0, y: 6, orientation: 'N' })
    });

    it('orders diagonal', () => {
        const marsRover = new Rover(0, 0, 'N')
        marsRover.orders("frflfr")
        expect(marsRover.getPositions()).toStrictEqual({ x: 1, y: 2, orientation: 'E' })
    });

    it('orders straight backward', () => {
        const marsRover = new Rover(0, 0, 'N')
        marsRover.orders("bbbbbb")
        expect(marsRover.getPositions()).toStrictEqual({ x: 0, y: -6, orientation: 'N' })
    });

    it('random orders', () => {
        const marsRover = new Rover(0, 0, 'N')
        marsRover.orders("rlrbbrbfllbfffr")
        expect(marsRover.getPositions()).toStrictEqual({ x: -2, y: 2, orientation: 'E' })
    });
});