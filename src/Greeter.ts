import Clock from './Clock'

export default class Greeter {
    private clock: Clock
    constructor(clock: Clock) {
        this.clock = clock
    }
    greet(currentTime: Date = new Date()) {
        if (true) { // currentTimeが朝なら
            return 'おはようございます'
        }
    }
}