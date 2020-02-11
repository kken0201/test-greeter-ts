import Greeter from './Greeter'
import MorningTimeRange from './MorningTimeRange'
import Clock from './Clock'

test('朝ならおはようございます', () => {
    const getcurrentTime = Clock.prototype.getCurrentTime = jest.fn();
    getcurrentTime.mockImplementationOnce(() => new Date('2000-01-01T08:00:00.000'))
    const contains = MorningTimeRange.prototype.contains = jest.fn()
    contains.mockImplementationOnce(() => true)
    const greeter = new Greeter(new Clock(), new MorningTimeRange())
    expect(greeter.greet()).toBe('おはようございます')
})

test('朝でないなら挨拶しない', () => {
    const getcurrentTime = Clock.prototype.getCurrentTime = jest.fn();
    getcurrentTime.mockImplementationOnce(() => new Date('2000-01-01T22:00:00.000'))
    const contains = MorningTimeRange.prototype.contains = jest.fn()
    contains.mockImplementationOnce(() => false)
    const greeter = new Greeter(new Clock(), new MorningTimeRange())
    expect(greeter.greet()).toBe('')
})
