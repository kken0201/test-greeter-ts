import Greeter from './Greeter'
import Clock from './Clock'

test('朝ならおはようございます', () => {
    const getcurrentTime = Clock.prototype.getCurrentTime = jest.fn();
    getcurrentTime.mockImplementationOnce(() => new Date('2000-01-01T08:00:00.000Z'))
    const greeter = new Greeter(new Clock())
    expect(greeter.greet()).toBe('おはようございます')
})

test('朝でないなら挨拶しない', () => {
    const getcurrentTime = Clock.prototype.getCurrentTime = jest.fn();
    getcurrentTime.mockImplementationOnce(() => new Date('2000-01-01T22:00:00.000Z'))
    const greeter = new Greeter(new Clock())
    expect(greeter.greet()).toBe('')
})
