import Greeter from './Greeter'

test('あいさつする', () => {
    const greeter = new Greeter()
    const currentTime = new Date('2000-01-01T08:00:00.000')
    expect(greeter.greet(currentTime)).toBe('おはようございます')
})
