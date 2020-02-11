import Greeter from './Greeter'

test('あいさつする', () => {
    const greeter = new Greeter()
    expect(greeter.greet()).toBe('おはようございます')
})
