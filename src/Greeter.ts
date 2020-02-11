import Clock from './Clock'
import MorningTimeRange from './MorningTimeRange'

export default class Greeter {
    private clock: Clock
    private morningTimeRange: MorningTimeRange
    constructor(clock: Clock, morningTimeRange: MorningTimeRange) {
        this.clock = clock
        this.morningTimeRange = morningTimeRange
    }
    greet() {
        const currentTime = this.clock.getCurrentTime()
        if (this.morningTimeRange.contains(currentTime)) {
            return 'おはようございます'
        }
        return ''
    }
}