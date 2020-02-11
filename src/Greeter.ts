import Clock from './Clock'
import { getHours } from 'date-fns'

export default class Greeter {
    private clock: Clock
    constructor(clock: Clock) {
        this.clock = clock
    }
    greet() {
        const currentTime = this.clock.getCurrentTime()
        const currentHour = getHours(currentTime)
        if (currentHour >= 5 && currentHour < 12) { // currentTimeが朝なら
            return 'おはようございます'
        }
        return ''
    }
}