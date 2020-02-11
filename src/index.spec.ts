import { greeter } from './index'

test('あいさつする', () => {
    expect(greeter()).toBe('おはようございます')
})
