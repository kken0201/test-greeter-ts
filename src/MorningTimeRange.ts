import { getHours } from 'date-fns'

export default class MorningTimeRange {
    contains(target: Date): boolean {
        const hour = getHours(target)
        return hour >= 5 && hour < 12
    }
}
